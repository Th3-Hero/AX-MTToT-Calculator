import { writable } from 'svelte/store';
import { SelectedWeapon } from './data/dataFormat';
import { MAX_AX_WEAPONS } from './util';

const buildStarterStore = (): SelectedWeapon[] => {
    const weapons: SelectedWeapon[] = [];
    for (let i = 0; i < MAX_AX_WEAPONS; i ++) {
        // Weapons default to C1, so we can assume for now that is always set
        weapons.push({name: '', class: undefined});
    }
    return weapons;
}

export let selectedWeapons = writable<SelectedWeapon[]>(buildStarterStore());

