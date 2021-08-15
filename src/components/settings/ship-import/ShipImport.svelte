<script lang="ts">
    import { EdsyParser } from '../../../typescript/parsers/EdsyParser';
    import { CoriolisParser } from '../../../typescript/parsers/CoriolisParser';
    import { Parser } from '../../../typescript/parsers/Parser';
    import { selectedDistributor, selectedWeapons } from '../../../typescript/store';
    import { InaraParser } from '../../../typescript/parsers/InaraParser';
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

        const parsedDistributor = parser.parseDistributor();
        if (parsedDistributor !== null) {
            $selectedDistributor = parsedDistributor;
        }
        const parsedWeapons = parser.parseWeapons();
        if (parsedWeapons != null) {
            $selectedWeapons = parsedWeapons;
        }

        newTab = SettingsTabs.SETTINGS;
    };
</script>

<div class="mr-2 is-flex is-flex-direction-column is-align-items-center">
    <p class="mt-0 has-text-centered">Import an existing build using JSON from EDSY, Inara and Coriolis</p>
    <textarea bind:value={userInput} class="textarea is-paddingless import-box has-fixed-size"></textarea>
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
        width: 300px;
        height: 350px;
        background: $input;
        border: none;

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
