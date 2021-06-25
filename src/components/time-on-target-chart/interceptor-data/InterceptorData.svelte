<script lang="ts">
    export let interceptor
</script>

<div class="is-relative">
    <img alt="{interceptor}" class="image" src="images/{interceptor}_Outline.png">
    <div class="graphic-text has-text-centered">0</div>
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
