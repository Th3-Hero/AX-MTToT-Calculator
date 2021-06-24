<script>
    let shipName = '';
</script>

<div class="time-on-target-chart">
    <div class="content-shift">
        <h1>Create a Chart</h1>

        <h3>Ammo Selection</h3>
        <select id="ammoSelectionDropdown" class="dropdown-select">
            <option value="Basic">Basic</option>
            <option value="Std">Standard</option>
            <option value="Prem">Premium</option>
        </select>

        <h3>Accuracy</h3>
        <select id="customAccuracy" class="dropdown-select">
            <option value="100">100%</option>
            <option value="75">75%</option>
            <option value="50">50%</option>
        </select>

        <h3>Name your ship!</h3>
        <input type="text" bind:value={shipName} class="text-input large-text-input" placeholder="Ship Name Here">
    </div>
    <div>
        <div id="create-a-chart-container">
            <div class="content-shift">
                <div class="settings-text">{shipName || "Ship Name"}</div>
                <div class="settings-text">Distributor</div>
                <div class="settings-text">Accuracy</div>
                <div class="settings-text">0ms SDPS cycle</div>
            </div>

            <div class="graphic">
                <div class="graphic-section">
                    <img alt="Cyclops" class="outline-image" src="images/Clops_Outline.png">
                    <div class="graphic-text">0</div>
                </div>

                <div class="graphic-section">
                    <img alt="Basilisk" class="outline-image" src="images/Basi_Outline.png">
                    <div class="graphic-text">0</div>
                </div>

                <div class="graphic-section">
                    <img alt="Medusa" class="outline-image" src="images/Dusa_Outline.png">
                    <div class="graphic-text">0</div>
                </div>

                <div class="graphic-section">
                    <img alt="Hydra" class="outline-image" src="images/Hydra_Outline.png">
                    <div class="graphic-text">0</div>
                </div>
            </div>
        </div>
    </div>
</div>


<style lang="scss">
    @import "src/theme";

    .time-on-target-chart {
        display: grid;
        grid-template-rows: 1fr 2fr;
        gap: 10px;
    }

    .large-text-input {
      width: 200px;
      padding: 3px 0;
      text-align: center;
    }

    .graphic {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .graphic-section {
        position: relative;
        text-align: center;
    }

    .graphic-text {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .settings-text {
        margin-top: 3px;
        font-size: 20px;
    }

    #create-a-chart-container {
        border-top: 3px solid $orange;
    }

    .outline-image {
        height: 140px;
        width: 140px;
    }

    h3 {
        margin-bottom: 0;
        margin-top: .5em;
    }

    h1 {
        margin-bottom: 0;
        margin-top: .25em;
        text-align: center;
    }
</style>
