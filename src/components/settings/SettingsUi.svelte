<script lang="ts">
    import ShipInput from './ship-input/ShipInput.svelte';
    import ShipImport from './ship-import/ShipImport.svelte';
    import { range, heatsinks, selectedWeapons, sdpsExtraDelay, selectedDistributor } from '../../typescript/store';
    import { gauss } from '../../typescript/data/weaponData'
    import { distributorRecharge, distributorBlueprints, distributorExperimentEffects } from '../../typescript/data/distributorData'

    // Until importing is implemented, always use manual input
    let isImport = false;

    // TODO: Fix var naming
    function mainSDPSCalculations () {
        let draw = 0;
        let extraDelay = 0;
        for (let selectedWeaponObj of $selectedWeapons) {
            if (selectedWeaponObj.name !== "gauss") {
                continue;
            }
            for (let gaussOptionsObject of gauss.options) {
                if (selectedWeaponObj.class !== gaussOptionsObject.weaponSize) {
                    continue;
                }
                draw += gaussOptionsObject.distroDraw;
            }
        }

        let distro = `${ $selectedDistributor.size }${ $selectedDistributor.class }`;
        let distroRecharge = distributorRecharge[distro];
        for (let blueprint of distributorBlueprints) {
            if (blueprint.shortName !== $selectedDistributor.blueprint) {
                continue;
            }
            let modifier = distributorRecharge[distro] * blueprint.weaponRechargeModifier;
            distroRecharge = distributorRecharge[distro] + modifier;
        }

        for (let effect of distributorExperimentEffects) {
            if (effect.shortName !== $selectedDistributor.experimentEffect) {
                continue;
            }
            let modifier = distroRecharge * effect.weaponRechargeModifier;
            distroRecharge = distroRecharge + modifier;
        }

        extraDelay = draw / (distroRecharge + 2 * $heatsinks) * 1000 - 2050;

        if (extraDelay < 0) {
            extraDelay = 0;
        }
        
        $sdpsExtraDelay = extraDelay;

    }

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

<button on:click={mainSDPSCalculations}>Test</button>

<style lang="scss">
    @import 'src/theme';

    // custom-button stuff is now unused if you left these for a reason keep them otherwise out they go
    // If they are being kept for the create a chart lets move them there for now
	.custom-button {
		width: 125px;
		border: 2px solid $orange;
		border-radius: 12px;
		font-size: 16px;
		font-weight: bold;
        color: $font;
        background: linear-gradient(90deg, $orange 50%, transparent 0%) 100%;
        background-size: 400%;
        transition: background 500ms ease-in-out;
        cursor: pointer;
	}

    .custom-button:hover {
        background-position: 0;
    }

    .small-text-input {
        width: 50px;
    }
</style>
