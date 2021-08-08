<script lang="ts">
    import { presets } from './ShipPresets';
    import { selectedWeapons, selectedDistributor, heatsinks } from '../../../typescript/store';

    const selectPreset = (option: string): void => {
        const preset = presets.get(option);
        $selectedWeapons = preset.weapons;
        $selectedDistributor = preset.distributor;
        $heatsinks = preset.heatsinks;
    };
</script>

<div>
    <div class="is-flex is-flex-direction-column is-align-items-center">
        {#each [...presets.keys()] as preset}
            <button type="button" class="mt-3 preset-button" name="presetOption" on:click={() => selectPreset(preset)}>{preset}</button>
        {/each}
    </div>
</div>

<style lang="scss">
    @import 'src/theme';

    .preset-button {
        width: 250px;
        height: 40px;
        color: $font;
        border: 1px solid $orange;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        background: $background;
    }

    .preset-button:hover {
        background: $background-light;
    }
</style>