<script lang="ts">
    import ShipInput from './ship-input/ShipInput.svelte';
    import ShipImport from './ship-import/ShipImport.svelte';
    import { range, heatsinks } from '../../typescript/store';

    // Until importing is implemented, always use manual input
    let isImport = false;

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

<style lang="scss">
    @import 'src/theme';

    .small-text-input {
        width: 50px;
    }
</style>
