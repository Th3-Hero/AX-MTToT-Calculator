<script lang="ts">
	export let name: string;
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

				<div>
					<select id="weaponDropdown1" class="dropdown-select">
						<option value="none">None</option>
						<option value="gauss">Guardian Gauss Cannon</option>
						<option value="shard">Guardian Shard Cannon</option>
						<option value="plasma">Guardian Plasma Charger</option>
						<option value="axmc">Anti-Xeno Multi Cannon</option>
						<option value="axmct">Anti-Xeno Multi Cannon Turreted</option>
						<option value="axmr">Anti-Xeno Missile Rack</option>
					</select>
					<select id="sizeDropdown1" class="dropdown-select">
						<option value="1">C1</option>
						<option value="2">C2</option>
						<option value="3">C3</option>
					</select>
				</div>

				<div>
					<select id="weaponDropdown2" class="dropdown-select">
						<option value="none">None</option>
						<option value="gauss">Guardian Gauss Cannon</option>
						<option value="shard">Guardian Shard Cannon</option>
						<option value="plasma">Guardian Plasma Charger</option>
						<option value="axmc">Anti-Xeno Multi Cannon</option>
						<option value="axmct">Anti-Xeno Multi Cannon Turreted</option>
						<option value="axmr">Anti-Xeno Missile Rack</option>
					</select>
					<select id="sizeDropdown2" class="dropdown-select">
						<option value="1">C1</option>
						<option value="2">C2</option>
						<option value="3">C3</option>
					</select>
				</div>

				<div>
					<select id="weaponDropdown3" class="dropdown-select">
						<option value="none">None</option>
						<option value="gauss">Guardian Gauss Cannon</option>
						<option value="shard">Guardian Shard Cannon</option>
						<option value="plasma">Guardian Plasma Charger</option>
						<option value="axmc">Anti-Xeno Multi Cannon</option>
						<option value="axmct">Anti-Xeno Multi Cannon Turreted</option>
						<option value="axmr">Anti-Xeno Missile Rack</option>
					</select>
					<select id="sizeDropdown3" class="dropdown-select">
						<option value="1">C1</option>
						<option value="2">C2</option>
						<option value="3">C3</option>
					</select>
				</div>

				<div>
					<select id="weaponDropdown4" class="dropdown-select">
						<option value="none">None</option>
						<option value="gauss">Guardian Gauss Cannon</option>
						<option value="shard">Guardian Shard Cannon</option>
						<option value="plasma">Guardian Plasma Charger</option>
						<option value="axmc">Anti-Xeno Multi Cannon</option>
						<option value="axmct">Anti-Xeno Multi Cannon Turreted</option>
						<option value="axmr">Anti-Xeno Missile Rack</option>
					</select>
					<select id="sizeDropdown4" class="dropdown-select">
						<option value="1">C1</option>
						<option value="2">C2</option>
						<option value="3">C3</option>
					</select>
				</div>
			</div>

			<div>
				<div class="custom-label">
					Distributor Selection
				</div>

				<div>
					<select id="distroSizeDropdown" class="dropdown-select">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
					</select>
					<select id="distroClassDropdown" class="dropdown-select">
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
						<option value="E">E</option>
					</select>
				</div>

				<div>
					<div>
						<select id="distroEngineeringDropdown" class="dropdown-select">
							<option value="none">Engineering</option>
							<option value="CE">Charge Enhanced</option>
							<option value="EF">Engine Focused</option>
							<option value="HCC">High Charge Capacity</option>
							<option value="S">Shielded</option>
							<option value="SF">System Focused</option>
							<option value="WF">Weapon Focused</option>
						</select>
					</div>
					<div>
						<select id="distroExperimentalDropdown" class="dropdown-select">
							<option value="none">Experimental</option>
							<option value="CC">Cluster Capacitors</option>
							<option value="SC">Super Conduits</option>
						</select>
					</div>
				</div>
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

				<div>
					<select id="targetSelectionDropdown" class="dropdown-select">
						<option value="Cyclops">Cyclops</option>
						<option value="Basilisk">Basilisk</option>
						<option value="Medusa">Medusa</option>
						<option value="Hydra">Hydra</option>
					</select>
				</div>
			</div>

			<div>
				<div class="custom-label">
					Target Range
				</div>

				<input type="text" id="range" class="text-input small-text-input" placeholder="0">
			</div>

			<div>
				<button onclick="calculateMain()">Calculate</button>
			</div>

		</weapon-inputs>



		<display class="display-container">
			<div class="main-title-wrap">
				Minimum Theoretical <br>
				Time on Target <br>
				Calculator
			</div>

			<div>
				<table class="data-table">
					<tr class="table-row">
						<th class="table-header-top table-header-end">Ammo</th>
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
			</div>
		</display>



		<chart-display class="chart-display-container">
			<div class="title-wrap">
				Create a chart:
			</div>

			<div class="custom-label">
				Ammo Selection
			</div>
			<select id="ammoSelectionDropdown" class="dropdown-select">
				<option value="Basic">Basic</option>
				<option value="Std">Standard</option>
				<option value="Prem">Premium</option>
			</select>

			<div>
				<div class="custom-label">
					Accuracy
				</div>

				<select id="customAccuracy" class="dropdown-select">
					<option value="100">100%</option>
					<option value="75">75%</option>
					<option value="50">50%</option>
				</select>
			</div>

			<div>
				<div class="custom-label">
					Ship Name
				</div>

				<input type="text" id="shipName" class="text-input large-text-input" placeholder="Ship Name Here">
			</div>

			<div id="create-a-chart-container">
				<div id="chart-content">
					<div class="create-a-chart">Ship Name</div>
					<div class="create-a-chart">Distro</div>
					<div class="create-a-chart">Accuracy</div>
					<div class="create-a-chart">0ms SDPS cycle</div>
					<div class="chart-wrap">
						<table class="chart-table">
							<tr>
								<div class="chart-section">
									<img class="outline-image" src="images/Clops_Outline.png">
									<div class="chart-text">0</div>
								</div>
								<div class="chart-section">
									<img class="outline-image" src="images/Basi_Outline.png">
									<div class="chart-text">0</div>
								</div>
							</tr> <br>
							<tr>
								<div class="chart-section">
									<img class="outline-image" src="images/Dusa_Outline.png">
									<div class="chart-text">0</div>
								</div>
								<div class="chart-section">
									<img class="outline-image" src="images/Hydra_Outline.png">
									<div class="chart-text">0</div>
								</div>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</chart-display>

	</grid>
</main>

<style>
	body {
		font-family: sans-serif;
		color: white;
		background: #212121;
	}

	/* ------------------------------- */
	/* MULTI USE PARAMETERS START      */
	/* ------------------------------- */
	.title-wrap {
		margin-top: 10px;
		margin-left: 15px;
		font-size: 28px;
		font-weight: bold;
	}

	.custom-label {
		margin-top: 10px;
		margin-left: 15px;
		font-size: 24px; /*try 20,22,24*/
	}

	.outline-image {
		height: 140px;
		width: 140px;
	}

	.dropdown-select {
		margin-top: 5px;
		margin-left: 15px;
		height: 25px;
		color: white;
		font-size: 14px;
		border: none;
		border-radius: 5px;
		background: #333333;
	}

	.dropdown-select:hover {
		cursor: pointer;
	}

	.text-input {
		outline: none;
		margin-top: 5px;
		margin-left: 15px;
		height: 20px;
		color: white;
		font-size: 16px;
		border: none;
		border-radius: 5px;
		background: #333333;
	}

	.text-input:focus {
		border: 2px solid #ff7100;
	}

	.small-text-input {
		width: 50px;
		padding: 3px 0px;
		text-align: center;
	}

	.large-text-input {
		width: 200px;
		padding: 3px 0px;
		text-align: center;
	}

	.chart-section {
		position: relative;
		float: left;
		text-align: center;
		color: white;
	}

	.chart-text {
		position: absolute;
		top: 48%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	/* ------------------------------- */
	/* MULTI USE PARAMETERS END        */
	/* ------------------------------- */
	.main-title-wrap {
		margin-top: 15px;
		margin-bottom: 15px;
		text-align: center;
		font-size: 36px;
		font-weight: bold;
	}

	.data-table {
		/* margin-top: 20px; */
		width: 450px;
		border-collapse: collapse;
		border-spacing: 0px;
	}

	.table-header-side {
		width: 110px;
	}

	.table-header-end {
		border-bottom: 3px solid #ff7100;
	}

	.table-header-top {
		padding: 5px 0px;
		border-top: 3px solid #ff7100;
	}

	.table-info {
		height: 20px;
		width: 80px;
		padding: 4px 0px;
		text-align: center;
		border-top: 3px solid #ff7100;
		border-bottom: 3px solid #ff7100;
		border-left: 3px solid #ff7100;
		border-right: 3px solid #ff7100;
	}

	.chart-table {
		width: 300px;
		border-collapse: collapse;
		border-spacing: 0px;
	}

	.create-a-chart {
		margin-top: 3px;
		font-size: 20px;
	}

	.chart-wrap {
		margin-top: 10px;
		margin-left: 5px;
	}

	#create-a-chart-container {
		border-top: 3px solid #ff7100;
		margin-top: 27px;
	}

	#chart-content {
		margin-top: 10px;
		margin-left: 15px;
	}

	/* grid display */
	#grid-container {
		display: grid;
		justify-content: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background: #212121; /* Final Background: #212121 Testing BG:#3498db */
		grid-template-columns: 325px 451px 325px;
		grid-template-rows: 700px;
		gap: 0px;
		grid-template-areas:
        "weapon-inputs display chart-display";
	}

	#grid > weapon-inputs {
		grid-area: weapon-inputs;
	}

	#grid > display {
		grid-area: display;
	}

	#grid > chart-display {
		grid-area: chart-display;
	}

	.weapon-inputs-container, .display-container, .chart-display-container {
		border: 3px solid #ff7100;
	}

	.weapon-inputs-container, .display-container {
		border-right: none;
	}
</style>
