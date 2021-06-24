<script lang="ts">
    let blueprint: string;
    let effect: string;

</script>

<div>
    <select id="sizeDropdown" class="dropdown-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
    </select>
    <select id="classDropdown" class="dropdown-select">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
    </select>
</div>

<div>
    <select id="blueprintDropdown" class="dropdown-select" bind:value={blueprint}
            on:change={() => effect = !blueprint ? '' : effect}>
        <option value="">No engineering</option>
        <option value="CE">Charge Enhanced</option>
        <option value="EF">Engine Focused</option>
        <option value="HCC">High Charge Capacity</option>
        <option value="S">Shielded</option>
        <option value="SF">System Focused</option>
        <option value="WF">Weapon Focused</option>
    </select>

    <select id="experimentalDropdown" class="dropdown-select" bind:value={effect} disabled={!blueprint}>
        <option value="">No effect</option>
        <option value="CC">Cluster Capacitors</option>
        <option value="SC">Super Conduits</option>
    </select>
</div>
