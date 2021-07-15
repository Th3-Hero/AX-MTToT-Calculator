<script lang="ts">
    import InfoTable from './info-table/InfoTable.svelte';
    import {
        range,
        heatsinks,
        selectedWeapons,
        sdpsExtraDelay,
        selectedDistributor,
        timeOnTargetData, setEmptyTotStore
    } from "../../typescript/store";
    import { gauss, AX_WEAPONS } from '../../typescript/data/weaponData'
    import {
        distributorRecharge,
        distributorBlueprints,
        distributorExperimentEffects
    } from '../../typescript/data/distributorData'
    import { THARGOID_TYPES } from '../../typescript/data/thargoidData'
    import {
        MIN_GAUSS_DELAY_MS,
        HEATSINK_WEP_RECHARGE
    } from '../../typescript/util'
    import type {
        AmmoToTData,
        DistributorModifier,
        SelectedWeapon,
        WeaponInformation
    } from '../../typescript/data/dataFormat';

    const fireCalculation = (): void => {
        const filteredWeapons: SelectedWeapon[] = Object.values($selectedWeapons).filter(selectedWeapon => selectedWeapon.name);
        if (filteredWeapons.length === 0) {
            $timeOnTargetData = setEmptyTotStore();
            return;
        }

        calculateTot();
    }

    // Shorthand for subscribing to these stores. On change, they fire the method
    $: $selectedWeapons, fireCalculation();
    $: $selectedDistributor, fireCalculation();
    $: $range, fireCalculation();
    $: $heatsinks, fireCalculation();

    const calculateSdps = (weapons: SelectedWeapon[]): void => {
        let totalDraw = 0;
        weapons.filter(selectedWeapon => selectedWeapon.name === 'gauss')
               .forEach(selectedWeapon => {
                   const weapon = gauss.options.find(option => option.weaponSize === selectedWeapon.class);
                   totalDraw += weapon.distroDraw
               });

        const distributor = `${ $selectedDistributor.size }${ $selectedDistributor.class }`;
        let weaponRecharge = distributorRecharge[distributor];
        weaponRecharge = applyModifier(weaponRecharge, distributorBlueprints, $selectedDistributor.blueprint);
        if ($selectedDistributor.blueprint) {
            weaponRecharge = applyModifier(weaponRecharge, distributorExperimentEffects, $selectedDistributor.experimentEffect);
        }

        const delay = ((totalDraw / (weaponRecharge + (HEATSINK_WEP_RECHARGE * $heatsinks))) * 1000) - MIN_GAUSS_DELAY_MS;
        $sdpsExtraDelay = delay < 0 ? 0 : delay;
        gaussDamageOutput();
    };

    const applyModifier = (weaponRecharge: number, toSearch: DistributorModifier[], modifierName: string): number => {
        if (!modifierName) {
            return weaponRecharge;
        }
        const modifier = toSearch.find(modifier => modifier.shortName === modifierName);
        return weaponRecharge * (1.0 + modifier.weaponRechargeModifier);
    };

    const gaussDamageOutput = (): void => {
        gauss.options.forEach(option => {
            option.rof = 1 / ((MIN_GAUSS_DELAY_MS + $sdpsExtraDelay) / 1000);
            option.sustainedAxDps = (option.clipSize / option.rof) /
                ((option.clipSize / option.rof) + option.reloadTime) * option.axDamage * option.rof;
        });
    };

    const calculateTot = (): void => {
        const filteredWeapons: SelectedWeapon[] = Object.values($selectedWeapons).filter(selectedWeapon => selectedWeapon.name);

        calculateSdps(filteredWeapons);
        resetCalculations(filteredWeapons);
        weaponCalculations(filteredWeapons);

        for (const thargoid of THARGOID_TYPES) {
            let interceptorTotData = $timeOnTargetData[thargoid.name];

            let adjDpsBasic = 0;
            let adjDpsStandard = 0;
            let adjDpsPremium = 0;
            const uniqueWeapons = filteredWeapons.filter((weapon, index) =>
                filteredWeapons.findIndex(selectedWeapon => selectedWeapon.name === weapon.name && selectedWeapon.class === weapon.class) === index);
            for (const selectedWeapon of uniqueWeapons) {
                const weaponOption = axWeaponsFind(selectedWeapon);
                const adjDps = weaponOption.nDps * (weaponOption.armourPierce / thargoid.armourRating) * weaponOption.falloffFactor;
                adjDpsBasic += adjDps;
                adjDpsStandard += adjDps * weaponOption.stdAmmoPercent;
                adjDpsPremium += adjDps * weaponOption.premAmmoPercent;
            }
            interceptorTotData.basicAmmo.adjDps = adjDpsBasic;
            interceptorTotData.standardAmmo.adjDps = adjDpsStandard;
            interceptorTotData.premiumAmmo.adjDps = adjDpsPremium;

            const ammoTypes = [interceptorTotData.basicAmmo, interceptorTotData.standardAmmo, interceptorTotData.premiumAmmo];

            const exertHP = thargoid.exertHp;
            for (const ammo of ammoTypes) {
                ammo.tot100 = (exertHP / (ammo.adjDps - thargoid.regenPerSecond)).toFixed(1);
                ammo.tot75 = (exertHP / (ammo.adjDps * 0.75 - thargoid.regenPerSecond)).toFixed(1);
                ammo.tot50 = (exertHP / (ammo.adjDps * 0.50 - thargoid.regenPerSecond)).toFixed(1);

                adjustForImpossible(ammo);
            }

            // To trigger a refresh, re-assign the object on the store
            $timeOnTargetData[thargoid.name] = interceptorTotData;
        }
    };

    const adjustForImpossible = (ammoData: AmmoToTData): void => {
        for (const [key, value] of Object.entries(ammoData)) {
            if (value >= 0) {
                continue;
            }
            ammoData[key] = 'N/A';
        }
    }

    const resetCalculations = (filteredWeapons: SelectedWeapon[]): void => {
        for (const selectedWeapon of filteredWeapons) {
            const weapon = axWeaponsFind(selectedWeapon);
            weapon.nDps = 0;
            weapon.falloffFactor = 1;
        }
    };

    const weaponCalculations = (filteredWeapons: SelectedWeapon[]): void => {
        for (const selectedWeapon of filteredWeapons) {
            const weapon = axWeaponsFind(selectedWeapon);
            weapon.nDps += weapon.sustainedAxDps;
            if ($range <= weapon.falloffRange) {
                weapon.falloffFactor = 1;
            }
            else {
                weapon.falloffFactor = 1 - (($range - weapon.falloffRange) / (weapon.maxRange - weapon.falloffRange));
            }
        }
    };

    const axWeaponsFind = (selectedWeapon: SelectedWeapon): WeaponInformation => {
        const weapon = AX_WEAPONS.find(weapon => selectedWeapon.name === weapon.shortName);
        return weapon.options.find(option => option.weaponSize === selectedWeapon.class);
    };
</script>

<!-- The spacing needs to be worked on for sure -->

<h1 class="title has-text-centered mt-1">
    Minimum Theoretical <br>
    Time on Target
</h1>

{#each THARGOID_TYPES as interceptor}
    <InfoTable {interceptor}/>
{/each}
