<script lang="ts">
    import ShipInput from './ship-input/ShipInput.svelte';
    import ShipImport from './ship-import/ShipImport.svelte';
    import { selectedWeapons } from '../../typescript/store';

    // Until importing is implemented, always use manual input
    let isImport = false;

    function testButton() {
        console.log($selectedWeapons);
    }
</script>

<h1>Settings</h1>
<div class="content-shift">
    {#if !isImport}
        <ShipInput/>
    {:else}
        <ShipImport/>
    {/if}

    <h2>Active Heatsinks</h2>
    <input type="text" id="sinks" class="text-input small-text-input" placeholder="0">

    <h2>Target Range</h2>
    <input type="text" id="range" class="text-input small-text-input" placeholder="0">
</div>

<button class="custom-button" on:click={testButton}>Calculate</button>

<style lang="scss">
    @import 'src/theme';

	.custom-button {
		left: 162px;
		bottom: 20px;
		width: 125px;
		padding: 5px 5px;
		position: absolute;
		transform: translate(-50%, 0%);
		border: 2px solid $orange;
		border-radius: 12px;
		text-align: center;
		font-size: 16px;
		font-weight: bold;
        color: $font;
        background: $background;
		background-image: linear-gradient(90deg, $orange 50%, transparent 0%);
		background-position: 100%;
		background-size: 400%;
        transition: background 500ms ease-in-out;
        cursor: pointer;
	}

    .custom-button:hover {
        background-position: 0;
    }

    .small-text-input {
        width: 50px;
        padding: 3px 0;
        text-align: center;
    }

    h1 {
        margin-bottom: 0;
        margin-top: .25em;
        text-align: center;
    }

    h2 {
        margin-bottom: .1em;
    }
</style>
