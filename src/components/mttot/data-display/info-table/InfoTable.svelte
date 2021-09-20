<script lang="ts">
    import { range, timeOnTargetData } from '../../store';
    import type { Thargoid } from '../../../../data/dataFormat';

    export let interceptor: Thargoid;

    $: totData = $timeOnTargetData[interceptor.name];
</script>

<table class="table is-hoverable is-fullwidth mb-1">
    <thead>
        <tr>
            <th>{interceptor.name} @ {$range || 0}m</th>
            <th class="has-text-centered column-spacing">Basic</th>
            <th class="has-text-centered column-spacing">Standard</th>
            <th class="has-text-centered column-spacing">Premium</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>100% Accuracy</th>
            <td class="has-text-centered column-spacing">{totData.basicAmmo.tot100}</td>
            <td class="has-text-centered column-spacing">{totData.standardAmmo.tot100}</td>
            <td class="has-text-centered column-spacing">{totData.premiumAmmo.tot100}</td>
        </tr>
        <tr>
            <th>75% Accuracy</th>
            <td class="has-text-centered column-spacing">{totData.basicAmmo.tot75}</td>
            <td class="has-text-centered column-spacing">{totData.standardAmmo.tot75}</td>
            <td class="has-text-centered column-spacing">{totData.premiumAmmo.tot75}</td>
        </tr>
        <tr>
            <th class="table-header-end">50% Accuracy</th>
            <td class="has-text-centered column-spacing">{totData.basicAmmo.tot50}</td>
            <td class="has-text-centered column-spacing">{totData.standardAmmo.tot50}</td>
            <td class="has-text-centered column-spacing">{totData.premiumAmmo.tot50}</td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    @import 'src/theme';
	.table {
        border-collapse: collapse;
    }

    .column-spacing {
        width: 20%;
    }
</style>
