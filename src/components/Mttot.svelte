<script lang="ts">
	import DataDisplay from './mttot/data-display/MainDataDisplay.svelte'
	import TimeOnTargetChart from './mttot/time-on-target-chart/TimeOnTargetChart.svelte'
</script>

<div class="is-flex content-container">
    <div class="component-container inner-container">
        <DataDisplay/>
    </div>

    <div>
        <TimeOnTargetChart/>
    </div>
</div>

<style lang="scss">
    @import 'src/theme';

    .content-container {
        width: 100%;
    }

    .component-container {
        width: 70%;
	}

    .inner-container {
        width: 100%;
        border-left: 3px solid $orange;
        border-right: 3px solid $orange;
	}
</style>