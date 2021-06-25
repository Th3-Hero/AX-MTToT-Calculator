<script lang="ts">
    import {
        distributorBlueprints,
        distributorExperimentEffects,
        distributorSizes,
        distributorClasses
    } from '../../../../typescript/data/distributorData';
    let blueprint: string;
    let effect: string;
</script>

<div>
    <select class="dropdown-select mt-1">
        {#each distributorSizes as size}
            <option value="{size}">{size}</option>
        {/each}
    </select>
    <select class="dropdown-select mt-1">
        {#each distributorClasses as distributorClass}
            <option value="{distributorClass}">{distributorClass}</option>
        {/each}
    </select>
</div>

<div>
    <select class="dropdown-select mt-1" bind:value={blueprint}
            on:change={() => effect = !blueprint ? '' : effect}>
        <option value="">No engineering</option>
        {#each distributorBlueprints as blueprint}
            <option value="{blueprint.shortName}">{blueprint.name}</option>
        {/each}
    </select>

    <select class="dropdown-select mt-1" bind:value={effect} disabled={!blueprint}>
        <option value="">No effect</option>
        {#each distributorExperimentEffects as effect}
            <option value="{effect.shortName}">{effect.name}</option>
        {/each}
    </select>
</div>
