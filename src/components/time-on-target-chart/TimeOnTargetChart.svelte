<script>
    import { KNOWN_INTERCEPTOR } from '../../typescript/util';
    import InterceptorData from './interceptor-data/InterceptorData.svelte';

    let shipName = '';
    let delay = 2050; // Delay for testing, will be passed in later by SDPS
    $: bpm = Math.round(60000 / delay * 4);

    let selectedAccuracy;
    let selectedAmmo;
</script>

<!--
    At some point we need to put a button on this as when we add html2image in the future
    we won't want it converting everytime there is an update and prompting a download.
    Other then that this should all auto update.
-->

<div class="time-on-target-chart">
    <div class="mb-3 ml-2">
        <h1 class="mt-1 mb-0 has-text-centered">Create a Chart</h1>

        <h3 class="mt-2 mb-0">Ammo Selection</h3>
        <select id="ammoSelectionDropdown" class="dropdown-select mt-1" bind:value={selectedAmmo}>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
        </select>

        <h3 class="mt-2 mb-0">Accuracy</h3>
        <select id="customAccuracy" class="dropdown-select mt-1" bind:value={selectedAccuracy}>
            <option value="100">100%</option>
            <option value="75">75%</option>
            <option value="50">50%</option>
        </select>

        <h3 class="mt-2 mb-0">Name your ship!</h3>
        <input type="text" bind:value={shipName} class="text-input large-text-input p-0 has-text-centered" placeholder="Ship Name Here">
    </div>
    <div>
        <div class="create-a-chart-container">
            <div class="ml-2 mt-3">
                <div class="has-font-20 mt-1">{shipName || "Ship Name"}</div>
                <div class="has-font-20 mt-1">Distributor</div> <!-- This will need to be passed in later when we have collection for distro -->
                <div class="has-font-20 mt-1">{selectedAmmo} ammo</div>
                <div class="has-font-20 mt-1">{selectedAccuracy}% accuracy</div>
                <div class="has-font-20 mt-1">{delay}ms ({bpm} BPM)</div>
            </div>

            <div class="graphic mt-4 is-justify-content-center">
                {#each KNOWN_INTERCEPTOR.reverse() as interceptor}
                    <InterceptorData {interceptor}/>
                {/each}
            </div>
        </div>
    </div>
</div>


<style lang="scss">
    @import "src/theme";

    .time-on-target-chart {
        display: grid;
        grid-template-rows: 1fr 2fr;
    }

    .large-text-input {
        width: 200px;
    }

    .graphic {
        display: grid;
        grid-template-columns: 145px 145px;
        grid-template-rows: 145px 145px;
    }

    .has-font-20 {
        font-size: 20px;
    }

    .create-a-chart-container {
        border-top: 3px solid $orange;
    }
</style>
