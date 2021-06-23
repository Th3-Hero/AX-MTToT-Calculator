<script lang="ts">
	export let name: string;
	import SettingUI from './components/SettingsUI.svelte'
	import DataDisplay from './components/MainDataDisplay.svelte'
	import CreateAChart from './components/CreateAChart.svelte'
	
</script>

<main>
	<grid id="grid-container">

		<weapon-inputs class="weapon-inputs-container">
			<SettingUI/>
		</weapon-inputs>

		<display class="display-container">
			<DataDisplay/>			
		</display>

		<chart-display class="chart-display-container">
			<CreateAChart/>
		</chart-display>

	</grid>
</main>

<style>

</style>
