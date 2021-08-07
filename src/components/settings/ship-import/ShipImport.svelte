<script lang="ts">
    import { EdsyParser } from '../../../typescript/parsers/EdsyParser';
    import { CoriolisParser } from '../../../typescript/parsers/CoriolisParser';
    import { Parser } from '../../../typescript/parsers/Parser';
    import { selectedDistributor, selectedWeapons } from '../../../typescript/store';
    import { InaraParser } from '../../../typescript/parsers/InaraParser';

    let userInput = '';
    export let isImport: boolean;

    const parseInput = (): void => {
        let inputAsJson: object;
        try {
            inputAsJson = JSON.parse(userInput);
            if (inputAsJson == null || typeof inputAsJson !== 'object') {
                return;
            }
        } catch (e) {
            // An error here means it isn't even parseable
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
            // Making it here means the input is parseable but not a recognized format
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

        isImport = false;
    };
</script>

<div class="mr-2 is-flex is-flex-direction-column is-align-items-center">
    <p class="mb has-text-centered">Import an existing build using JSON from EDSY and Coriolis</p>
    <textarea bind:value={userInput} class="textarea is-paddingless import-box has-fixed-size"></textarea>
    <p class="is-size-7">Importing will overwrite previous module input</p>
    <button class="button mt-5 import-button" on:click={() => parseInput()}>Import</button>
</div>


<style lang="scss">
    @import "src/theme";
    .import-box {
        width: 300px;
        height: 400px;
        background: $input;
        border: none;
        border-bottom: 1px solid $orange;

        -ms-overflow-style: none;
         scrollbar-width: none;
    }

    .import-box::-webkit-scrollbar {
        display: none;
    }

    .import-button {
      font-weight: bold;
    }
</style>
