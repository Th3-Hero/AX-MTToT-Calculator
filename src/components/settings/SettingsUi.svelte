<script lang="ts">
    import ShipInput from './ship-input/ShipInput.svelte';
    import ShipImport from './ship-import/ShipImport.svelte';
    import { selectedWeapons, range } from '../../typescript/store';

    // Until importing is implemented, always use manual input
    let isImport = false;

    function testButton() {
        console.log($selectedWeapons);
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
        <input type="text" id="sinks" class="text-input small-text-input has-text-centered p-0" placeholder="0">

        <h2 class="mb-1">Target Range</h2>
        <input type="text" bind:value={$range} id="range" class="text-input small-text-input has-text-centered p-0" placeholder="0">
    </div>

    <button class="custom-button has-text-centered is-align-self-center p-1 mt-6"
            on:click={testButton}>Calculate</button>
</div>

<style lang="scss">
    @import 'src/theme';

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
