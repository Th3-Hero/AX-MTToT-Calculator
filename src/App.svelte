<script lang="ts">
	export let name: string;
	import WeaponSelector from './components/Weapon.svelte'
	import DistroSelector from './components/Distro.svelte'
	import TargetSelector from './components/Target.svelte'
	import InfoTable from './components/InfoTable.svelte'
	import CreateChartSlector from './components/CreateChartSelection.svelte'
	import CreateChart from './components/CreateChart.svelte'
	function testButton() {console.log("Click!")}
</script>

<main>
	<grid id="grid-container">


		<weapon-inputs class="weapon-inputs-container">
			<div class="title-wrap">
				Settings:
			</div>

			<div>
				<div class="custom-label">
					Weapon Selection
				</div>

				<WeaponSelector/>
				<WeaponSelector/>
				<WeaponSelector/>
				<WeaponSelector/>

			<div>
				<div class="custom-label">
					Distributor Selection
				</div>

				<DistroSelector/>

			</div>

			<div>
				<div class="custom-label">
					Active Heatsinks
				</div>

				<input type="text" id="sinks" class="text-input small-text-input" placeholder="0">
			</div>

			<div>
				<div class="custom-label">
					Target Selection
				</div>

				<TargetSelector/>

			</div>

			<div>
				<div class="custom-label">
					Target Range
				</div>

				<input type="text" id="range" class="text-input small-text-input" placeholder="0">
			</div>

			<div>
				<button class="custom-button" on:click={testButton}>Calculate</button>
			</div>

		</weapon-inputs>


		<display class="display-container">
			<div class="main-title-wrap">
				Minimum Theoretical <br>
				Time on Target <br>
				Calculator
			</div>

			<InfoTable/>

		</display>


		<chart-display class="chart-display-container">
			<div class="title-wrap">
				Create a chart:
			</div>

			<CreateChartSlector/>

			<CreateChart/>

		</chart-display>

	</grid>
</main>

<style>
	
	.main-title-wrap {
		margin-top: 15px;
		margin-bottom: 53px;
		text-align: center;
		font-size: 36px;
		font-weight: bold;
	}

	.custom-button {
		left: 162px;
		bottom: 20px;
		width: 125px;
		padding: 5px 5px;
		position: absolute;
		transform: translate(-50%, 0%);
		background: none;
		color: white;
		border: 3px solid #ff7100;
		border-radius: 10px;
		text-align: center;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
	}

</style>
