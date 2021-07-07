<script lang="ts">
    import InfoTable from './info-table/InfoTable.svelte';
    import { KNOWN_INTERCEPTOR } from '../../typescript/util';
    import {
        range,
        heatsinks,
        selectedWeapons, 
        sdpsExtraDelay, 
        selectedDistributor,
        interceptorStore
    } from '../../typescript/store'
    import { 
        gauss,
        AX_WEAPONS
    } from '../../typescript/data/weaponData'
    import {
        distributorRecharge,
        distributorBlueprints,
        distributorExperimentEffects
    } from '../../typescript/data/distributorData'
    import { THARGOID_TYPES } from '../../typescript/data/thargoidData'
    import type { DistributorModifier } from '../../typescript/data/dataFormat';

    // TODO: Can you work on making all these calculations dynamic so they happen whenever anything is changed
    // calculateSdps can call calculateTot if it makes it better, just need to make sure Sdps happens first

    // You can remove comments as you check this over and shit on me
    // Don't shit on my var names to hard, I know some are meh but it's the hardest part of this project is making names

    const calculateSdps = (): void => {
        let filteredWeapons = $selectedWeapons.filter(selectedWeapon => selectedWeapon.name !== '' && selectedWeapon.class !== undefined);
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

//=============================================================================================================================//

// const weapon = AX_WEAPONS.find(weapon => selectedWeapon.name === weapon.shortName);
// const weaponOption = weapon.options.find(option => option.weaponSize === selectedWeapon.class);
// This gets used a lot any way we can make this it's own function?

    const calculateTot = (): void => {
        let filteredWeapons = $selectedWeapons.filter(selectedWeapon => selectedWeapon.name !== '' && selectedWeapon.class !== undefined);
        resetCalculations(filteredWeapons);
        calculateNdps(filteredWeapons); // I tried to break up some of the functionality into steps
        calculateFalloffFactor(filteredWeapons); // nDps and falloff are a different step before from all the main dps calculations
        for (let thargoid of THARGOID_TYPES) {
            const thargoidStore = $interceptorStore.find(thargoidType => thargoid.name === thargoidType.name);

            let adjDpsBasicAmmo = 0; // I assume I can get rid of these and just use the store instead as long as I reset the store
            let adjDpsStandardAmmo = 0;
            let adjDpsPremiumAmmo = 0;
            const uniqueWeapons = filteredWeapons.filter((weapon, index) =>
            filteredWeapons.findIndex(selectedWeapon => selectedWeapon.name === weapon.name && selectedWeapon.class === weapon.class) === index);
            for (let selectedWeapon of uniqueWeapons) {
                const weapon = AX_WEAPONS.find(weapon => selectedWeapon.name === weapon.shortName);
                const weaponOption = weapon.options.find(option => option.weaponSize === selectedWeapon.class);
                adjDpsBasicAmmo += (weaponOption.nDps * (weaponOption.armourPierce / thargoid.armourRating) * weaponOption.falloffFactor);
                adjDpsStandardAmmo = adjDpsBasicAmmo * weaponOption.stdAmmoPercent;
                adjDpsPremiumAmmo = adjDpsStandardAmmo * weaponOption.premAmmoPercent;
            }
            thargoidStore.basicAmmo.adjDps = adjDpsBasicAmmo;
            thargoidStore.standardAmmo.adjDps = adjDpsStandardAmmo;
            thargoidStore.premiumAmmo.adjDps = adjDpsPremiumAmmo;
                        
            let ammoTypes = [thargoidStore.basicAmmo, thargoidStore.standardAmmo, thargoidStore.premiumAmmo];
            // there was no real good way to go through the weapon types so this was my solution
            // not sure if it's bad or decent

            
            let exert = thargoid.exertHp; // something like this where I define it because I use it more then twice I'm always on the edge about, I'm not sure if it's worth only using 3 times but any more it's worth it.
            let eDps = 0; // this may be redundant
            for (let ammo of ammoTypes) { // ammo feels like a bad name but sat here for 10 min couldn't think of something better
                let regen = thargoid.regenPerSecond
                let eDps = ammo.adjDps - thargoid.regenPerSecond;
                ammo.tot100 = exert / eDps;
                ammo.tot75 = exert / (ammo.adjDps / 4 * 3 - regen);
                ammo.tot50 = exert / (ammo.adjDps / 2 - regen);
            }
        }
    }

    const resetCalculations = (filteredWeapons): void => {
        for (let selectedWeapon of filteredWeapons) {
            const weapon = AX_WEAPONS.find(weapon => selectedWeapon.name === weapon.shortName);
            const correctWep = weapon.options.find(option => option.weaponSize === selectedWeapon.class);
            correctWep.nDps = 0;
            correctWep.falloffFactor = 1;
        }
    }

    const calculateNdps = (filteredWeapons): void => {
        for (let selectedWeapon of filteredWeapons) {
            const weapon = AX_WEAPONS.find(weapon => selectedWeapon.name === weapon.shortName);
            const correctWep = weapon.options.find(option => option.weaponSize === selectedWeapon.class);
            correctWep.nDps += correctWep.sustainedAxDps;
        }
    }

    const calculateFalloffFactor = (filteredWeapons): void => {
        for (let selectedWeapon of filteredWeapons) { 
            const weapon = AX_WEAPONS.find(weapon => selectedWeapon.name === weapon.shortName);
            const correctWep = weapon.options.find(option => option.weaponSize === selectedWeapon.class);
            if ($range <= correctWep.falloffRange) {
                correctWep.falloffFactor = 1;
            }
            else {
                correctWep.falloffFactor = 1 - (($range - correctWep.falloffRange) / (correctWep.maxRange - correctWep.falloffRange));
            }
        }
    }

</script>

<!-- The spacing needs to be worked on for sure -->

<h1 class="title has-text-centered mt-1">
    Minimum Theoretical <br>
    Time on Target
</h1>

<button on:click={calculateTot}>Test</button> <!-- This button can be removed when it's dynamic -->

{#each KNOWN_INTERCEPTOR as interceptor}
    <InfoTable {interceptor}/>
{/each}

