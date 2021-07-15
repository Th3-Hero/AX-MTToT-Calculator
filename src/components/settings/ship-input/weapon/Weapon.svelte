<script lang="ts">
    import type { AxWeapon } from '../../../../typescript/data/dataFormat';
    import { AX_WEAPONS } from '../../../../typescript/data/weaponData';
    import { selectedWeapons } from '../../../../typescript/store';

    const findAxWeapon = (weaponName: string): AxWeapon | undefined => {
        return AX_WEAPONS.find(axWeapon => axWeapon.shortName === weaponName);
    };

    export let index: string;

    $: selectedWeapon = $selectedWeapons[index];

    const updateStore = ():void => {
        $selectedWeapons[index] = selectedWeapon;
    }
</script>

<!-- svelte-ignore a11y-no-onchange -->
<select class="dropdown-select mt-2"
        bind:value={selectedWeapon.name}
        on:change={() => {
            selectedWeapon.class = findAxWeapon(selectedWeapon.name)?.options[0].weaponSize;
            updateStore();
        }}>
    <option value="">No weapon</option>
    {#each AX_WEAPONS as axWeapon}
        <option value="{axWeapon.shortName}">{axWeapon.weaponName}</option>
    {/each}
</select>

<!-- svelte-ignore a11y-no-onchange -->
{#if selectedWeapon.name}
    <select class="dropdown-select mt-2"
            bind:value={selectedWeapon.class}
            on:change={() => updateStore()}>
        {#each findAxWeapon(selectedWeapon.name).options as option}
            <option value="{option.weaponSize}">C{option.weaponSize}</option>
        {/each}
    </select>
{/if}
