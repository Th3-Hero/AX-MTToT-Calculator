import { writable } from 'svelte/store';
import { SelectedDistributor, SelectedWeapon, FullTotPerInterceptor } from './data/dataFormat';
import { THARGOID_TYPES } from './data/thargoidData';
import { MAX_AX_WEAPONS } from './util';

const buildStarterWeaponStore = (): SelectedWeapon[] => {
    const weapons: SelectedWeapon[] = [];
    for (let i = 0; i < MAX_AX_WEAPONS; i++) {
        // Weapons default to C1, so we can assume for now that is always set
        weapons.push({name: '', class: undefined});
    }
    return weapons;
}

const buildStarterDataStore = (): FullTotPerInterceptor[] => {
    const TotData: FullTotPerInterceptor[] = [];
    for (let type of THARGOID_TYPES) {
        TotData.push({
            name: type.name,
            basicAmmo: { adjDps: 0, tot100: 0, tot75: 0, tot50: 0 },
            standardAmmo: { adjDps: 0, tot100: 0, tot75: 0, tot50: 0 },
            premiumAmmo: { adjDps: 0, tot100: 0, tot75: 0, tot50: 0 }
        });
    }
    return TotData;
}

// Input stores
export const selectedWeapons = writable<SelectedWeapon[]>(buildStarterWeaponStore());
export const range = writable<number>(1500);
export const selectedDistributor = writable<SelectedDistributor>(
    { size: 1, class: 'A', blueprint: '', experimentEffect: '' });
export const heatsinks = writable<number>(0);

// Calculation stores
export const sdpsExtraDelay = writable<number>(0);
export const fullInterceptorTotData = writable<FullTotPerInterceptor[]>(buildStarterDataStore());
