<script>
import App from "../../App.svelte";


    let shipName = '';
    let delay = 2050; // Delay for testing, will be passed in later by SDPS
    function cylceDisplay() {
        if (delay <= 2050) { // should be redundent later as SDPS won't return less then 2050ms as thats the min
            delay = 2050;
        }

        let delayDisplay = `${ delay }ms (${ Math.round(60000 / delay * 4) } BPM)`
        return delayDisplay        
    }
    let delayDisplay = cylceDisplay(delay);
    let selectedAccuracy;
    let selectedAmmo;
</script>

<!--
    At some point we need to put a button on this as when we add html2image in the future 
    we won't want it converting everytime there is an update and propting a download.
    Other then that this should all auto update. 
-->

<div class="time-on-target-chart">
    <div class="content-shift">
        <h1>Create a Chart</h1>

        <h3>Ammo Selection</h3>
        <select id="ammoSelectionDropdown" class="dropdown-select" bind:value={selectedAmmo}>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
        </select>

        <h3>Accuracy</h3>
        <select id="customAccuracy" class="dropdown-select" bind:value={selectedAccuracy}>
            <option value="100">100%</option>
            <option value="75">75%</option>
            <option value="50">50%</option>
        </select>

        <h3>Name your ship!</h3>
        <input type="text" bind:value={shipName} class="text-input large-text-input" placeholder="Ship Name Here">
    </div>
    <div>
        <div id="create-a-chart-container">
            <div class="content-shift margin-go-brr">
                <div class="settings-text">{shipName || "Ship Name"}</div>
                <div class="settings-text">Distributor</div> <!-- This will need to be passed in later when we have colection for distro -->
                <div class="settings-text">{selectedAmmo} Ammo</div>
                <div class="settings-text">{selectedAccuracy}% Accuracy</div>
                <div class="settings-text">{delayDisplay || "SDPS Cycle"}</div>
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
        margin-top: 10px;
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

    .margin-go-brr {
        margin-top: 10px; // it was to close to the top I was mad
    }

    .outline-image {
        height: 140px;
        width: 140px;
    }

    h1 {
        margin-bottom: 0;
        margin-top: .25em;
        text-align: center;
    }

    h3 {
        margin-bottom: 0;
        margin-top: .5em;
    }

</style>
