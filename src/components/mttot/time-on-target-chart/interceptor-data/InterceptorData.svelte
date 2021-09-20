<script lang="ts">
    import { timeOnTargetData } from '../../store';

    export let interceptor: string;
    export let accuracy: string;
    export let ammo: string;

    $: totData = $timeOnTargetData[interceptor];
</script>

<div class="is-relative">
    <img alt="{interceptor}" class="image" src="images/{interceptor}_Outline.png">
    <div class="graphic-text has-text-centered">{totData[`${ ammo.toLowerCase() }Ammo`][`tot${ accuracy }`]}</div>
</div>

<style>
    .image {
        height: 145px;
        width: 145px;
    }

    .graphic-text {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
