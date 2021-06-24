<script lang="ts">
    import WeaponSelector from './weapon/Weapon.svelte';
    import DistroSelector from './distributor/Distro.svelte';
    import { selectedWeapons } from '../../../typescript/store';
</script>

<h2>Weapon Selection</h2>
{#each $selectedWeapons as weapon}
    <WeaponSelector {weapon}/>
{/each}

<h2>Distributor Selection</h2>
<DistroSelector/>

<style>
    h2 {
        margin-bottom: .1em;
    }
</style>
