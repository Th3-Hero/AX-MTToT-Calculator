<script lang="ts">
    import { range, timeOnTargetData } from '../../../typescript/store';
    import type { Thargoid } from '../../../typescript/data/dataFormat';

    export let interceptor: Thargoid;

    $: totData = $timeOnTargetData[interceptor.name];
</script>

<table class="table is-hoverable is-fullwidth mb-1">
    <thead>
        <tr>
            <th>{interceptor.name} @ {$range || 0}m</th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>100% Accuracy</th>
            <td class="has-text-centered table-colum">{totData.basicAmmo.tot100}</td>
            <td class="has-text-centered table-colum">{totData.standardAmmo.tot100}</td>
            <td class="has-text-centered table-colum">{totData.premiumAmmo.tot100}</td>
        </tr>
        <tr>
            <th>75% Accuracy</th>
            <td class="has-text-centered table-colum">{totData.basicAmmo.tot75}</td>
            <td class="has-text-centered table-colum">{totData.standardAmmo.tot75}</td>
            <td class="has-text-centered table-colum">{totData.premiumAmmo.tot75}</td>
        </tr>
        <tr>
            <th class="table-header-end">50% Accuracy</th>
            <td class="has-text-centered table-colum">{totData.basicAmmo.tot50}</td>
            <td class="has-text-centered table-colum">{totData.standardAmmo.tot50}</td>
            <td class="has-text-centered table-colum">{totData.premiumAmmo.tot50}</td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    @import 'src/theme';
	.table {
        border-collapse: collapse;
    }

    .table-colum {
        width: 60px;
    }
</style>
