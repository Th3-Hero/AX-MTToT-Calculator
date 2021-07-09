<script lang="ts">
    import { range, fullInterceptorTotData } from '../../../typescript/store';

    export let interceptor;

    const thargoid = $fullInterceptorTotData.find(type => interceptor.name === type.name);
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
            <th class="">100% Accuracy</th>
            <td class="has-text-centered" id="100Basic">{thargoid.basicAmmo.tot100 || "N/A"}</td>
            <td class="has-text-centered" id="100Std">{thargoid.standardAmmo.tot100 || "N/A"}</td>
            <td class="has-text-centered" id="100Prem">{thargoid.premiumAmmo.tot100 || "N/A"}</td>
        </tr>
        <tr>
            <th>75% Accuracy</th>
            <td class="has-text-centered" id="75Basic">{thargoid.basicAmmo.tot75 || "N/A"}</td>
            <td class="has-text-centered" id="75Std">{thargoid.standardAmmo.tot75 || "N/A"}</td>
            <td class="has-text-centered" id="75Prem">{thargoid.premiumAmmo.tot75 || "N/A"}</td>
        </tr>
        <tr>
            <th class="table-header-end">50% Accuracy</th>
            <td class="has-text-centered" id="50Basic">{thargoid.basicAmmo.tot50 || "N/A"}</td>
            <td class="has-text-centered" id="50Std">{thargoid.standardAmmo.tot50 || "N/A"}</td>
            <td class="has-text-centered" id="50Prem">{thargoid.premiumAmmo.tot50 || "N/A"}</td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    @import 'src/theme';
	.table {
        border-collapse: collapse;
    }
</style>
