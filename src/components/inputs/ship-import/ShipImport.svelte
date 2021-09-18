<script lang="ts">
    import { EdsyParser } from '../parsers/EdsyParser';
    import { CoriolisParser } from '../parsers/CoriolisParser';
    import { Parser } from '../parsers/Parser';
    import { selectedDistributor, selectedWeapons } from '../../mttot/store';
    import { InaraParser } from '../parsers/InaraParser';
    import { SettingsTabs } from '../SettingTabs';

    let userInput = '';
    export let newTab: string;

    let errorInfo = '';

    const parseInput = (): void => {
        let inputAsJson: object;
        try {
            inputAsJson = JSON.parse(userInput);
            if (inputAsJson == null || typeof inputAsJson !== 'object') {
                return;
            }
        } catch (e) {
            errorInfo = 'Input could not be read.';
            return;
        }

        let parser: Parser;
        if (Array.isArray(inputAsJson)) {
            if (inputAsJson[0]?.header?.appName === 'EDSY') {
                parser = new EdsyParser(inputAsJson[0]);
            } else if (inputAsJson[0]?.header?.appName === 'Inara') {
                parser = new InaraParser(inputAsJson[0]);
            }
        } else if (inputAsJson['$schema']?.includes('coriolis.io')) {
            parser = new CoriolisParser(inputAsJson);
        } else {
            errorInfo = 'Input is not a supported format.';
            return;
        }

        $selectedDistributor = parser.parseDistributor();
        $selectedWeapons = parser.parseWeapons();

        newTab = SettingsTabs.SETTINGS;
    };
</script>

<div class="ml-2 mr-2 is-flex is-flex-direction-column is-align-items-center">
    <p class="mt-0 has-text-centered">Import an existing build using JSON from EDSY, Inara and Coriolis</p>
    <textarea bind:value={userInput} class="is-paddingless import-box has-fixed-size"></textarea>
    <p class="is-size-7">Importing will overwrite previous module selection!</p>
    <button class="mt-3 import-button" on:click={() => parseInput()}>Import</button>
    {#if errorInfo !== ''}
        <span class="material-icons mt-5">error</span>
        <div class="mt-2">{errorInfo}</div>
    {:else}
        <div></div>
    {/if}

</div>

<style lang="scss">
    @import "src/theme";
    .import-box {
        width: 100%;
        height: 300px;
        color: $font;
        background: $input;
        outline: none;
        border: none;
        resize: none;

        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .import-box::-webkit-scrollbar {
        display: none;
    }

    .import-button {
        width: 100px;
        height: 35px;
        color: $font;
        background: $background;
        border: 2px solid $orange;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
    }

    .import-button:hover {
        cursor: pointer;
        background: $background-light;
    }
</style>
