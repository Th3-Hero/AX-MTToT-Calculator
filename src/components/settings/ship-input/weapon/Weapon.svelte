<script lang="ts">
    import type { AxWeapon, SelectedWeapon } from '../../../../typescript/data/dataFormat';
    import { AX_WEAPONS } from '../../../../typescript/data/weaponData';

    const findAxWeapon = (weaponName: string): AxWeapon | undefined => {
        return AX_WEAPONS.find(axWeapon => axWeapon.shortName === weaponName);
    };

    export let selectedWeapon: SelectedWeapon;
</script>

<select class="dropdown-select mt-2"
        bind:value={selectedWeapon.name}
        on:change={() => selectedWeapon.class = findAxWeapon(selectedWeapon.name)?.options[0].weaponSize}>
    <option value="">No weapon</option>
    {#each AX_WEAPONS as axWeapon}
        <option value="{axWeapon.shortName}">{axWeapon.weaponName}</option>
    {/each}
</select>

{#if selectedWeapon.name}
    <select class="dropdown-select mt-2" bind:value={selectedWeapon.class}>
        {#each  findAxWeapon(selectedWeapon.name).options as option}
            <option value="{option.weaponSize}">C{option.weaponSize}</option>
        {/each}
    </select>
{/if}
