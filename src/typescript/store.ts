import { writable } from 'svelte/store';
import { SelectedDistributor, SelectedWeapon, TotDataStore } from './data/dataFormat';
import { KNOWN_INTERCEPTOR, MAX_AX_WEAPONS } from './util';

const buildStarterWeaponStore = (): SelectedWeapon[] => {
    const weapons: SelectedWeapon[] = [];
    for (let i = 0; i < MAX_AX_WEAPONS; i++) {
        // Weapons default to C1, so we can assume for now that is always set
        weapons.push({name: '', class: undefined});
    }
    return weapons;
}

// Not sure if this is the best way of doing it, this is how I did it to the best of my knowledge
const buildStarterDataStore = (): TotDataStore[] => {
    const totData: TotDataStore[] = [];
    for (let type of KNOWN_INTERCEPTOR) {
        totData.push({
            name: `${type}`,
            basicAmmo: { adjDps: 0, tot100: 0, tot75: 0, tot50: 0 },
            standardAmmo: { adjDps: 0, tot100: 0, tot75: 0, tot50: 0 },
            premiumAmmo: { adjDps: 0, tot100: 0, tot75: 0, tot50: 0 }
        })
    }
    return totData;
}

// Input stores
export let selectedWeapons = writable<SelectedWeapon[]>(buildStarterWeaponStore());
export let range = writable<number>(1500);
export let selectedDistributor = writable<SelectedDistributor>(
    { size: 1, class: 'A', blueprint: '', experimentEffect: '' });
export let heatsinks = writable<number>(0);

// Calculation stores
export let sdpsExtraDelay = writable<number>(0);
export let interceptorStore = writable<TotDataStore[]>(buildStarterDataStore());
