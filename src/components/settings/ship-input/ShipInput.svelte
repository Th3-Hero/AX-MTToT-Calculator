<script lang="ts">
    import WeaponSelector from './weapon/Weapon.svelte';
    import DistroSelector from './distributor/Distro.svelte';
    import { selectedWeapons } from '../../../typescript/store';
</script>

<h2 class="mb-1">Weapon Selection</h2>
{#each $selectedWeapons as selectedWeapon}
    <WeaponSelector {selectedWeapon}/>
{/each}

<h2>Distributor Selection</h2>
<DistroSelector/>
