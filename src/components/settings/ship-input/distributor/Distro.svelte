<script lang="ts">
    import {
        distributorBlueprints,
        distributorExperimentEffects,
        distributorSizes,
        distributorClasses
    } from '../../../../typescript/data/distributorData';
    import { selectedDistributor } from '../../../../typescript/store';
</script>

<div>
    <select class="dropdown-select mt-1" bind:value={$selectedDistributor.size}>
        {#each distributorSizes as size}
            <option value="{size}">{size}</option>
        {/each}
    </select>
    <!-- svelte-ignore a11y-no-onchange -->
    <select class="dropdown-select mt-1" bind:value={$selectedDistributor.class}
            on:change={() => {
                if ($selectedDistributor.class === 'G') { $selectedDistributor.blueprint = ''; }
            }}>
        {#each distributorClasses as distributorClass}
            <option value="{distributorClass}">{distributorClass}</option>
        {/each}
    </select>
    {#if $selectedDistributor.class === 'G'}
        <img alt="(Guardian)" class="image is-inline" src="images/Guardian_insignia.png">
    {/if}
</div>

<div>
    <!-- svelte-ignore a11y-no-onchange -->
    <select class="dropdown-select mt-1" bind:value={$selectedDistributor.blueprint}
            disabled="{$selectedDistributor.class === 'G'}"
            on:change={() => {
                if (!$selectedDistributor.blueprint) { $selectedDistributor.experimentEffect = ''; }
            }}>
        <option value="">No engineering</option>
        {#each distributorBlueprints as blueprint}
            <option value="{blueprint.shortName}">{blueprint.name}</option>
        {/each}
    </select>

    <select class="dropdown-select mt-1" bind:value={$selectedDistributor.experimentEffect}
            disabled={!$selectedDistributor.blueprint}>
        <option value="">No effect</option>
        {#each distributorExperimentEffects as effect}
            <option value="{effect.shortName}">{effect.name}</option>
        {/each}
    </select>
</div>

<style>
    .image {
        width: 19px;
        transform: translate(0, 3px);
    }
</style>
