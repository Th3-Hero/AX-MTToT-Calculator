<script lang="ts">
    export let interceptor: string;
    export let range: number;
</script>

<table class="data-table">
    <tr class="table-row">
        <th class="table-header-top table-header-end">{interceptor} @ {range}m</th>
        <th class="table-header-top">Basic</th>
        <th class="table-header-top">Standard</th>
        <th class="table-header-top">Premium</th>
    </tr>
    <tr class="table-row">
        <th class="table-header-side">100% Accuracy</th>
        <td class="table-info" id="100Basic">N/A</td>
        <td class="table-info" id="100Std">N/A</td>
        <td class="table-info" id="100Prem">N/A</td>
    </tr>
    <tr class="table-row">
        <th class="table-header-side">75% Accuracy</th>
        <td class="table-info" id="75Basic">N/A</td>
        <td class="table-info" id="75Std">N/A</td>
        <td class="table-info" id="75Prem">N/A</td>
    </tr>
    <tr class="table-row">
        <th class="table-header-side table-header-end">50% Accuracy</th>
        <td class="table-info" id="50Basic">N/A</td>
        <td class="table-info" id="50Std">N/A</td>
        <td class="table-info" id="50Prem">N/A</td>
    </tr>
</table>

<style lang="scss">
    @import 'src/theme';
    .data-table {
		width: 100%;
		border-collapse: collapse;
        margin-bottom: 15px;
	}

	.table-header-side {
		width: 8em;
	}

	.table-header-end {
		border-bottom: 3px solid $orange;
	}

	.table-header-top {
		padding: 5px 0;
		border-top: 3px solid $orange;
	}

	.table-info {
		height: 20px;
		width: 80px;
		padding: 4px 0;
		text-align: center;
        border: 3px solid $orange;
	}
</style>
