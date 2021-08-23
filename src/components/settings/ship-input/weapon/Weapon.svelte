<script lang="ts">
    import { AX_WEAPONS } from '../../../../typescript/data/weaponData';
    import type { AxWeapon } from '../../../../typescript/data/dataFormat';
    import { selectedWeapons } from '../../../../typescript/store';

    const findAxWeapon = (weaponName: string): AxWeapon | undefined => {
        return AX_WEAPONS.find(axWeapon => axWeapon.internalName === weaponName);
    };

    export let index: string;

    $: selectedWeapon = $selectedWeapons[index];

    const updateStore = ():void => {
        $selectedWeapons[index] = selectedWeapon;
    };
</script>

<!-- svelte-ignore a11y-no-onchange -->
<div>
    <select class="dropdown-select mt-2 weapon-input"
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
        <select class="dropdown-select mt-2 weapon-size"
                bind:value={selectedWeapon.size}
                on:change={() => updateStore()}>
            {#each [... new Set(findAxWeapon(selectedWeapon.weaponName).options.map(o => o.weaponSize))] as option}
                <option value="{option}">C{option}</option>
            {/each}
        </select>
        <select class="dropdown-select mt-2 weapon-input weapon-type"
                bind:value={selectedWeapon.weaponType}
                on:change={() => updateStore()}>
            {#each [... new Set(findAxWeapon(selectedWeapon.weaponName).options.map(o => o.mount))] as option}
                <option value="{option}">{option}</option>
            {/each}
        </select>
    {/if}
</div>

<style lang="scss">
    .weapon-input {
        width: 180px;
    }

    .weapon-size {
        width: 40px;
    }

    .weapon-type {
        width: 65px;
    }
</style>
