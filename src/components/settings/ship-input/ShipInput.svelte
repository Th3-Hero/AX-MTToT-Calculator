<script lang="ts">
    import WeaponSelector from './weapon/Weapon.svelte';
    import DistroSelector from './distributor/Distro.svelte';
    import { selectedWeapons } from '../../../typescript/store';
</script>

<h2 class="mt-0 mb-2">Weapon Selection</h2>
{#each Object.keys($selectedWeapons) as index}
    <WeaponSelector {index}/>
{/each}

<h2 class="mb-1">Distributor Selection</h2>
<DistroSelector/>
