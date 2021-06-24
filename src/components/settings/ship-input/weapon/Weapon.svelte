<script lang="ts">
    import type { SelectedWeapon } from '../../../../typescript/data/dataFormat';

    export let weapon: SelectedWeapon;
</script>

<select class="dropdown-select" bind:value={weapon.name}>
    <option value="">None</option>
    <option value="gauss">Guardian Gauss Cannon</option>
    <option value="shard">Guardian Shard Cannon</option>
    <option value="plasma">Guardian Plasma Charger</option>
    <option value="axmc">Anti-Xeno Multi Cannon</option>
    <option value="axmct">Anti-Xeno Multi Cannon Turreted</option>
    <option value="axmr">Anti-Xeno Missile Rack</option>
</select>
<select class="dropdown-select" bind:value={weapon.class} disabled={!weapon.name} on:>
    <option value="1">C1</option>
    <option value="2">C2</option>
    <option value="3">C3</option>
</select>
