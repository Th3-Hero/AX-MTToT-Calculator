<script lang="ts">
    import ShipInput from './ship-input/ShipInput.svelte';
    import ShipImport from './ship-import/ShipImport.svelte';
    import { range, heatsinks } from '../../typescript/store';

    // Until importing is implemented, always use manual input
    let isImport = false;

    const inputCheck = () => {
        let heatsinkInput = Number($heatsinks);
        let rangeInput = Number($range);
        if (!Number.isInteger(heatsinkInput) || heatsinkInput < 0 || heatsinkInput > 8) {
            $heatsinks = 0;
        }
        // 6k may need to be changed if we add new shard cannon
        if (!Number.isInteger(rangeInput) || rangeInput < 0 || rangeInput > 6000) {
            $range = 1500;
        }
    }
</script>

<div class="is-flex is-flex-direction-column">
    <h1 class="mb-0 mt-1 has-text-centered">Settings</h1>
    <div class="ml-2">
        {#if isImport}
            <ShipImport bind:isImport/>
        {:else}
            <ShipInput/>

            <h2 class="mb-1">Active Heatsinks</h2>
            <input type="text" bind:value={$heatsinks} on:change={inputCheck} class="text-input small-text-input has-text-centered p-0" placeholder="0">

            <h2 class="mb-1">Target Range</h2>
            <input type="text" bind:value={$range} on:change={inputCheck} class="text-input small-text-input has-text-centered p-0" placeholder="1500">
        {/if}
    </div>
</div>

<style lang="scss">
    @import 'src/theme';

    .small-text-input {
        width: 50px;
    }
</style>
