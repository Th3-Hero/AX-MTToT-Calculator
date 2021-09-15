<script lang="ts">
    import {
        distributorBlueprints,
        distributorExperimentEffects,
        distributorRatings,
        distributorSizes
    } from '../../../../typescript/data/distributorData';
    import { selectedDistributor } from '../../../mttot/typescript/store';
</script>

<div class="ml-2">
    <div>
        <select class="dropdown-select mt-1" bind:value={$selectedDistributor.size}>
            {#each distributorSizes as size}
                <option value="{size}">{size}</option>
            {/each}
        </select>
        <!-- svelte-ignore a11y-no-onchange -->
        <select class="dropdown-select mt-1" bind:value={$selectedDistributor.rating}
                on:change={() => {
                    if ($selectedDistributor.rating === 'G') {
                        $selectedDistributor.blueprint = '';
                        $selectedDistributor.experimentEffect = '';
                    }
                }}>
            {#each distributorRatings as distributorClass}
                <option value="{distributorClass}">{distributorClass}</option>
            {/each}
        </select>
        {#if $selectedDistributor.rating === 'G'}
            <img alt="(Guardian)" class="image is-inline" src="images/Guardian_insignia.png">
        {/if}
    </div>

    <div>
        <!-- svelte-ignore a11y-no-onchange -->
        <select class="dropdown-select mt-1" bind:value={$selectedDistributor.blueprint}
                disabled="{$selectedDistributor.rating === 'G'}"
                on:change={() => {
                    if (!$selectedDistributor.blueprint) { $selectedDistributor.experimentEffect = ''; }
                }}>
            <option value="">No engineering</option>
            {#each distributorBlueprints as blueprint}
                <option value="{blueprint.shortName}">{blueprint.name}</option>
            {/each}
        </select>

        <!-- We should consider seeing if we can just define the space and hide the engineering when guardian is selected -->
        <select class="dropdown-select mt-1" bind:value={$selectedDistributor.experimentEffect}
                disabled={!$selectedDistributor.blueprint}>
            <option value="">No effect</option>
            {#each distributorExperimentEffects as effect}
                <option value="{effect.shortName}">{effect.name}</option>
            {/each}
        </select>
    </div>
</div>

<style>
    .image {
        width: 19px;
        transform: translate(0, 3px);
    }
</style>
