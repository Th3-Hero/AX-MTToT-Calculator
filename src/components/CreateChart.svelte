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
                        <img alt="Clops" class="outline-image" src="images/Clops_Outline.png">
                        <div class="chart-text">0</div>
                    </div>
                    <div class="chart-section">
                        <img alt="Basi" class="outline-image" src="images/Basi_Outline.png">
                        <div class="chart-text">0</div>
                    </div>
                </tr>
                <tr>
                    <div class="chart-section">
                        <img alt="Dusa" class="outline-image" src="images/Dusa_Outline.png">
                        <div class="chart-text">0</div>
                    </div>
                    <div class="chart-section">
                        <img alt="Hydra" class="outline-image" src="images/Hydra_Outline.png">
                        <div class="chart-text">0</div>
                    </div>
                </tr>
            </table>
        </div>
    </div>
</div>

<style>
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

    .outline-image {
        height: 140px;
        width: 140px;
    }
</style>