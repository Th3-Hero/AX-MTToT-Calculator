<script lang="ts">
    import ShipInput from './ship-input/ShipInput.svelte';
    import ShipImport from './ship-import/ShipImport.svelte';
    import {
        range,
        heatsinks,
        selectedWeapons,
        sdpsExtraDelay,
        selectedDistributor
    } from '../../typescript/store';
    import { gauss } from '../../typescript/data/weaponData'
    import {
        distributorRecharge,
        distributorBlueprints,
        distributorExperimentEffects
    } from '../../typescript/data/distributorData'
    import type { DistributorModifier } from '../../typescript/data/dataFormat';

    // Until importing is implemented, always use manual input
    let isImport = false;

    const calculateSdps = (): void => {
        let draw = 0;
        $selectedWeapons.filter(selectedWeapon => selectedWeapon.name === 'gauss')
                        .forEach(selectedWeapon => {
                            const weapon = gauss.options.find(option => option.weaponSize === selectedWeapon.class);
                            draw += weapon.distroDraw
                        });

        const distributor = `${ $selectedDistributor.size }${ $selectedDistributor.class }`;
        let weaponRecharge = distributorRecharge[distributor];
        weaponRecharge = applyModifier(weaponRecharge, distributorBlueprints, $selectedDistributor.blueprint);
        if ($selectedDistributor.blueprint) {
            weaponRecharge = applyModifier(weaponRecharge, distributorExperimentEffects, $selectedDistributor.experimentEffect);
        }

        const delay = ((draw / (weaponRecharge + (2 * $heatsinks))) * 1000) - 2050;
        $sdpsExtraDelay = delay < 0 ? 0 : delay;
    };

    const applyModifier = (weaponRecharge: number, toSearch: DistributorModifier[], modifierName: string): number => {
        if (!modifierName) {
            return weaponRecharge;
        }
        const modifier = toSearch.find(modifier => modifier.shortName === modifierName);
        return weaponRecharge * (1.0 + modifier.weaponRechargeModifier);
    };
</script>

<div class="is-flex is-flex-direction-column">
    <h1 class="mb-0 mt-1 has-text-centered">Settings</h1>
    <div class="ml-2">
        {#if !isImport}
            <ShipInput/>
        {:else}
            <ShipImport/>
        {/if}

        <h2 class="mb-1">Active Heatsinks</h2>
        <input type="text" bind:value={$heatsinks} class="text-input small-text-input has-text-centered p-0" placeholder="0">

        <h2 class="mb-1">Target Range</h2>
        <input type="text" bind:value={$range} id="range" class="text-input small-text-input has-text-centered p-0" placeholder="1500">
    </div>
</div>

<button on:click={calculateSdps}>Test</button>

<style lang="scss">
    @import 'src/theme';

    .small-text-input {
        width: 50px;
    }
</style>
