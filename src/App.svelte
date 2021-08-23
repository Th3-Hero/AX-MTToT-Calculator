<svelte:head>
	<style src="./bulma.scss"></style>
</svelte:head>

<script lang="ts">
	import DataDisplay from './components/data-display/MainDataDisplay.svelte';
	import SettingUi from './components/settings/SettingsUi.svelte';
	import TimeOnTargetChart from './components/time-on-target-chart/TimeOnTargetChart.svelte';
</script>

<main class="is-flex is-justify-content-center">
	<div class="grid-container vertically-center">
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
	.vertically-center {
		margin-top: calc((100vh - 700px)/2);
	}

	.grid-container {
		display: grid;
		grid-template-columns: 325px 450px 325px;
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
