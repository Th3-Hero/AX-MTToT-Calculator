<script lang="ts">
    import DistroSelector from './distributor/Distro.svelte';
    import { selectedWeapons } from '../../mttot/store';
    import WeaponSelector from './weapon/Weapon.svelte';
</script>

<h2 class="ml-2 mt-0 mb-2">Weapon Selection</h2>
{#each Object.keys($selectedWeapons) as index}
    <WeaponSelector {index}/>
{/each}

<h2 class="ml-2 mb-1">Distributor Selection</h2>
<DistroSelector/>
