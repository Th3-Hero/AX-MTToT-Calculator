<script lang="ts">
    import { range } from '../../../typescript/store';

    export let interceptor: string;
</script>

<table class="table is-hoverable is-fullwidth mb-1">
    <thead>
        <tr>
            <th>{interceptor} @ {$range || 0}m</th>
            <th>Basic</th>
            <th>Standard</th>
            <th>Premium</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th class="">100% Accuracy</th>
            <td class="has-text-centered" id="100Basic">N/A</td>
            <td class="has-text-centered" id="100Std">N/A</td>
            <td class="has-text-centered" id="100Prem">N/A</td>
        </tr>
        <tr>
            <th>75% Accuracy</th>
            <td class="has-text-centered" id="75Basic">N/A</td>
            <td class="has-text-centered" id="75Std">N/A</td>
            <td class="has-text-centered" id="75Prem">N/A</td>
        </tr>
        <tr>
            <th class="table-header-end">50% Accuracy</th>
            <td class="has-text-centered" id="50Basic">N/A</td>
            <td class="has-text-centered" id="50Std">N/A</td>
            <td class="has-text-centered" id="50Prem">N/A</td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    @import 'src/theme';
	.table {
        border-collapse: collapse;
    }
</style>
