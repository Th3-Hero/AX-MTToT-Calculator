<script lang="ts">
    import type { AxWeapon } from '../../../../typescript/data/dataFormat';
    import { AX_WEAPONS } from '../../../../typescript/data/weaponData';
    import { selectedWeapons } from '../../../../typescript/store';

    const findAxWeapon = (weaponName: string): AxWeapon | undefined => {
        return AX_WEAPONS.find(axWeapon => axWeapon.internalName === weaponName);
    };

    export let index: string;

    $: selectedWeapon = $selectedWeapons[index];

    const updateStore = ():void => {
        $selectedWeapons[index] = selectedWeapon;
    }
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select class="dropdown-select mt-2"
        bind:value={selectedWeapon.weaponName}
        on:change={() => {
            selectedWeapon.size = findAxWeapon(selectedWeapon.weaponName)?.options[0].weaponSize;
            updateStore();
        }}>
    <option value="">No weapon</option>
    {#each AX_WEAPONS as axWeapon}
        <option value="{axWeapon.internalName}">{axWeapon.fullName}</option>
    {/each}
</select>

<!-- svelte-ignore a11y-no-onchange -->
{#if selectedWeapon.weaponName}
    <select class="dropdown-select mt-2"
            bind:value={selectedWeapon.size}
            on:change={() => updateStore()}>
        {#each [... new Set(findAxWeapon(selectedWeapon.weaponName).options.map(option => option.weaponSize))] as option}
            <option value="{option}">C{option}</option>
        {/each}
    </select>
{/if}
