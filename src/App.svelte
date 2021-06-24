<script lang="ts">
	import SettingUi from './components/settings/SettingsUi.svelte'
	import DataDisplay from './components/data-display/MainDataDisplay.svelte'
	import TimeOnTargetChart from './components/time-on-target-chart/TimeOnTargetChart.svelte'
</script>

<main>
	<div class="grid-container">
		<div class="component-container">
			<SettingUi/>
		</div>

		<div class="component-container inner-container">
			<DataDisplay/>
		</div>

		<div class="component-container">
			<TimeOnTargetChart/>
		</div>
	</div>
</main>

<style lang="scss">
	.grid-container {
		display: grid;
		justify-content: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		grid-template-columns: 325px 451px 325px;
		grid-template-rows: 700px;
	}

	.component-container {
		border: 3px solid #ff7100;
	}

	.inner-container {
		border-right: none;
		border-left: none;
	}
</style>
