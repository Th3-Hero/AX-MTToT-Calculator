<script lang="ts">
    import ShipInput from './ship-input/ShipInput.svelte';
    import ShipImport from './ship-import/ShipImport.svelte';
    import { range, heatsinks } from '../mttot/typescript/store';
    import Presets from './presets/Presets.svelte';
    import { SettingsTabs } from './SettingTabs';

    let selectedTab = SettingsTabs.SETTINGS;
    let newTab = SettingsTabs.SETTINGS;

    const selectTab = (): void => {
        if (newTab === selectedTab) {
            return;
        }

        document.getElementById(`${selectedTab}Tab`).classList.remove('is-active');
        document.getElementById(`${newTab}Tab`).classList.add('is-active');
        selectedTab = newTab;
    };

    $: newTab, selectTab();

    const inputCheck = () => {
        let heatsinkInput = Number($heatsinks);
        let rangeInput = Number($range);
        if (!Number.isInteger(heatsinkInput) || heatsinkInput < 0 || heatsinkInput > 8) {
            $heatsinks = 0;
        }
        // 6k may need to be changed if we add new shard cannon
        if (!Number.isInteger(rangeInput) || rangeInput < 0 || rangeInput > 6000) {
            $range = 1500;
        }
    };
</script>

<div class="is-flex is-flex-direction-column">
    <div class="tabs mb-3 is-boxed is-centered">
        <ul class="p-0">
            <li id="settingsTab" class="tab is-active" on:click={() => newTab = SettingsTabs.SETTINGS}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a><span>Settings</span></a>
            </li>
            <li id="presetsTab" class="tab" on:click={() => newTab = SettingsTabs.PRESETS}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a><span>Presets</span></a>
            </li>
            <li id="importerTab" class="tab" on:click={() => newTab = SettingsTabs.IMPORTER}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a><span>Importer</span></a>
            </li>
        </ul>
    </div>
    <div class="is-flex is-flex-direction-column">
        {#if selectedTab !== 'settings'}
            {#if selectedTab === 'importer'}
                <ShipImport bind:newTab/>
            {:else}
                <Presets/>
            {/if}
        {:else}
            <ShipInput/>

            <div class="ml-2">
                <h2 class="mb-1">Active Heatsinks</h2>
                <input type="text" bind:value={$heatsinks} on:change={inputCheck} class="text-input small-text-input has-text-centered p-0" placeholder="0">

                <h2 class="mb-1">Target Range</h2>
                <input type="text" bind:value={$range} on:change={inputCheck} class="text-input small-text-input has-text-centered p-0" placeholder="1500">
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @import 'src/theme';

    .small-text-input {
        width: 50px;
    }

    .tab a {
        color: $font;
        cursor: pointer;
    }

    .tabs.is-boxed li.is-active a {
        background: $background-light;
    }
</style>
