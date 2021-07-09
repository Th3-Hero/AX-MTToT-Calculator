<script lang="ts">
    import InfoTable from './info-table/InfoTable.svelte';
    import {
        range,
        heatsinks,
        selectedWeapons, 
        sdpsExtraDelay, 
        selectedDistributor,
        fullInterceptorTotData
    } from '../../typescript/store'
    import { gauss, AX_WEAPONS } from '../../typescript/data/weaponData'
    import {
        distributorRecharge,
        distributorBlueprints,
        distributorExperimentEffects
    } from '../../typescript/data/distributorData'
    import { THARGOID_TYPES } from '../../typescript/data/thargoidData'
    import type { DistributorModifier, SelectedWeapon } from '../../typescript/data/dataFormat';

    // TODO: Can you work on making all these calculations dynamic so they happen whenever anything is changed
    // calculateSdps can call calculateTot if it makes it better, just need to make sure Sdps happens first

    // You can remove comments as you check this over and shit on me
    // Don't shit on my var names to hard, I know some are meh but it's the hardest part of this project is making names

    const calculateSdps = (): void => {
        const filteredWeapons: SelectedWeapon[] = $selectedWeapons.filter(selectedWeapon => selectedWeapon.name);
        let totalDraw = 0;
        filteredWeapons.filter(selectedWeapon => selectedWeapon.name === 'gauss')
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

        const delay = ((totalDraw / (weaponRecharge + (2 * $heatsinks))) * 1000) - 2050;
        $sdpsExtraDelay = delay < 0 ? 0 : delay;
        gaussRof();
    };

    const applyModifier = (weaponRecharge: number, toSearch: DistributorModifier[], modifierName: string): number => {
        if (!modifierName) {
            return weaponRecharge;
        }
        const modifier = toSearch.find(modifier => modifier.shortName === modifierName);
        return weaponRecharge * (1.0 + modifier.weaponRechargeModifier);
    };

    const gaussRof = (): void => {
        gauss.options.forEach(option => {
            option.rof = 1 / (2.05 + ($sdpsExtraDelay / 1000));
        });
    };


    const calculateTot = (): void => {
        const filteredWeapons: SelectedWeapon[] = $selectedWeapons.filter(selectedWeapon => selectedWeapon.name);
        resetCalculations(filteredWeapons);
        weaponCalculations(filteredWeapons);
        for (const thargoid of THARGOID_TYPES) {
            const interceptorTotData = $fullInterceptorTotData.find(interceptorData => thargoid.name === interceptorData.name);

            let adjDpsBasicAmmo = 0;
            let adjDpsStandardAmmo = 0;
            let adjDpsPremiumAmmo = 0;
            const uniqueWeapons = filteredWeapons.filter((weapon, index) =>
                filteredWeapons.findIndex(selectedWeapon => selectedWeapon.name === weapon.name && selectedWeapon.class === weapon.class) === index);
            for (const selectedWeapon of uniqueWeapons) {
                const weaponOption = axWeaponsFind(selectedWeapon);
                adjDpsBasicAmmo += weaponOption.nDps * (weaponOption.armourPierce / thargoid.armourRating) * weaponOption.falloffFactor;
                adjDpsStandardAmmo = adjDpsBasicAmmo * weaponOption.stdAmmoPercent;
                adjDpsPremiumAmmo = adjDpsStandardAmmo * weaponOption.premAmmoPercent;
            }
            interceptorTotData.basicAmmo.adjDps = adjDpsBasicAmmo;
            interceptorTotData.standardAmmo.adjDps = adjDpsStandardAmmo;
            interceptorTotData.premiumAmmo.adjDps = adjDpsPremiumAmmo;

            const ammoTypes = [interceptorTotData.basicAmmo, interceptorTotData.standardAmmo, interceptorTotData.premiumAmmo];

            const exertHP = thargoid.exertHp;
            for (const ammo of ammoTypes) {
                ammo.tot100 = exertHP / (ammo.adjDps - thargoid.regenPerSecond);
                ammo.tot75 = exertHP / (ammo.adjDps * 0.75 - thargoid.regenPerSecond);
                ammo.tot50 = exertHP / (ammo.adjDps * 0.50 - thargoid.regenPerSecond);
            }
        }
    };

    const resetCalculations = (filteredWeapons): void => {
        for (const selectedWeapon of filteredWeapons) {
            const correctWeapon = axWeaponsFind(selectedWeapon);
            correctWeapon.nDps = 0;
            correctWeapon.falloffFactor = 1;
        }
    };

    const weaponCalculations = (filteredWeapons): void => {
        for (const selectedWeapon of filteredWeapons) {
            const correctWeapon = axWeaponsFind(selectedWeapon);
            correctWeapon.nDps += correctWeapon.sustainedAxDps;
            if ($range <= correctWeapon.falloffRange) {
                correctWeapon.falloffFactor = 1;
            }
            else {
                correctWeapon.falloffFactor = 1 - (($range - correctWeapon.falloffRange) / (correctWeapon.maxRange - correctWeapon.falloffRange));
            }
        }
    };

    const axWeaponsFind = (selectedWeapon: SelectedWeapon) => {
        const weapon = AX_WEAPONS.find(weapon => selectedWeapon.name === weapon.shortName);
            const correctWeapon = weapon.options.find(option => option.weaponSize === selectedWeapon.class);
        return correctWeapon;
    };

</script>

<!-- The spacing needs to be worked on for sure -->

<h1 class="title has-text-centered mt-1">
    Minimum Theoretical <br>
    Time on Target
</h1>

<button on:click={calculateTot}>Test</button> <!-- This button can be removed when it's dynamic -->

{#each THARGOID_TYPES as interceptor}
    <InfoTable interceptor={interceptor.name}/>
{/each}

