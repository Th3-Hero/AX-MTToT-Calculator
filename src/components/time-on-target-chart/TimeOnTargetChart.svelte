<script lang="ts">
    import { THARGOID_TYPES } from '../../typescript/data/thargoidData'
    import InterceptorData from './interceptor-data/InterceptorData.svelte';
    import { selectedDistributor, sdpsExtraDelay, selectedWeapons } from '../../typescript/store';
    import { MIN_GAUSS_DELAY_MS, MS_PER_MINUTE } from '../../typescript/util'
    import domtoimage from 'dom-to-image';
    import { saveAs } from 'file-saver'; // This is needed, TS doesn't understand .saveAs

    let shipName = '';
    $: delay = Math.round($sdpsExtraDelay) + MIN_GAUSS_DELAY_MS;
    $: bpm = Math.round(MS_PER_MINUTE / delay * 4);
    $: $selectedWeapons, hideDelay();

    let accuracy = '100';
    let ammo = "Basic";
    let haveGaussSelected = false;

    const distributorEngineering = (): string => {
        const blueprint = $selectedDistributor.blueprint;
        const effect = $selectedDistributor.experimentEffect;

        if ($selectedDistributor.rating === 'G') {
            return 'Guardian';
        } else if (!blueprint) {
            return 'Not engineered';
        }

        return `${blueprint.toUpperCase()} + ${effect ? effect.toUpperCase() : 'No effect'}`;
    };

    const hideDelay = (): void => {
	    haveGaussSelected = Object.values($selectedWeapons).filter(weapon => weapon.weaponName === 'gausscannon').length > 0;
    };

    const chartToImage = (): void => {
        domtoimage.toBlob(document.getElementById('customChart'))
        .then((blob) => {
            window.saveAs(blob, 'My_Chart.png');
        });
    };
</script>


<div class="time-on-target-chart">
    <div class="chart-settings">
        <div class="mb-3 ml-2">
            <h1 class="mt-1 mb-0 has-text-centered">Create a Chart</h1>

            <h3 class="mt-2 mb-0">Name your ship!</h3>
            <input type="text" bind:value={shipName} maxlength="26" class="text-input large-text-input p-0 has-text-centered" placeholder="Ship Name Here">

            <h3 class="mt-2 mb-0">Ammo Selection</h3>
            <select class="dropdown-select mt-1" bind:value={ammo}>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
            </select>

            <h3 class="mt-2 mb-0">Accuracy</h3>
            <select class="dropdown-select mt-1" bind:value={accuracy}>
                <option value="100">100%</option>
                <option value="75">75%</option>
                <option value="50">50%</option>
            </select>

            <button class="download-button" on:click={chartToImage}>Download Chart <br> as PNG</button>
        </div>
    </div>

    <div id="customChart" class="create-a-chart-container">
        <div class="ml-2 mt-3">
            <div class="has-font-20 mt-1">{shipName || "AX Ship"}</div>
            <div class="has-font-20 mt-1">
                {`${$selectedDistributor.size}${$selectedDistributor.rating}
                    distributor (${distributorEngineering()})`
                }
            </div>
            <div class="has-font-20 mt-1">{ammo} ammo</div>
            <div class="has-font-20 mt-1">{accuracy}% accuracy</div>
            {#if haveGaussSelected}
                <div class="has-font-20 mt-1">{delay}ms ({bpm} BPM)</div>
            {:else}
                <div></div>
            {/if}
        </div>

        <div class="graphic mt-4 is-justify-content-center">
            {#each THARGOID_TYPES as interceptor}
                <InterceptorData bind:accuracy bind:ammo interceptor={interceptor.name}/>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    @import "src/theme";

    .time-on-target-chart {
        position: relative;
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

    .chart-settings {
        border-bottom: 3px solid $orange;
    }

    .download-button {
        position: absolute;
        right: 5px;
        top: 180px;
        padding: 5px 10px;
        color: $font;
        background: $background;
        border: 1px solid $orange;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
    }

    .download-button:hover {
        cursor: pointer;
        background: $background-light;
    }
</style>
