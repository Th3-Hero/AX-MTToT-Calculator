import { writable } from 'svelte/store';
import { SelectedDistributor, SelectedWeapon } from './data/dataFormat';
import { MAX_AX_WEAPONS } from './util';

const buildStarterStore = (): SelectedWeapon[] => {
    const weapons: SelectedWeapon[] = [];
    for (let i = 0; i < MAX_AX_WEAPONS; i++) {
        // Weapons default to C1, so we can assume for now that is always set
        weapons.push({name: '', class: undefined});
    }
    return weapons;
}

// Input stores
export let selectedWeapons = writable<SelectedWeapon[]>(buildStarterStore());
export let range = writable<number>(1500);
export let selectedDistributor = writable<SelectedDistributor>(
    { size: 1, class: 'A', blueprint: '', experimentEffect: '' });
export let heatsinks = writable<number>(0);

// Calculation stores
export let sdpsExtraDelay = writable<number>(0)
