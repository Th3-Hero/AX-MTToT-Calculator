import { writable } from 'svelte/store';
import { SelectedDistributor, SelectedWeapons, TimeOnTargetData } from './data/dataFormat';
import { THARGOID_TYPES } from './data/thargoidData';
import { MAX_AX_WEAPONS } from './util';

const buildStarterWeaponStore = (): SelectedWeapons => {
    const weapons: SelectedWeapons = {}

    for (let i = 0; i < MAX_AX_WEAPONS; i++) {
        weapons[i] = { name: '', class: undefined };
    }
    return weapons;
};

export const setEmptyTotStore = (): TimeOnTargetData => {
    const totData: TimeOnTargetData = {}

    for (let type of THARGOID_TYPES) {
        totData[type.name] = {
            basicAmmo: { adjDps: 0, tot100: 'N/A', tot75: 'N/A', tot50: 'N/A' },
            standardAmmo: { adjDps: 0, tot100: 'N/A', tot75: 'N/A', tot50: 'N/A' },
            premiumAmmo: { adjDps: 0, tot100: 'N/A', tot75: 'N/A', tot50: 'N/A' }
        };
    }

    return totData;
};

// Input stores
export const selectedWeapons = writable<SelectedWeapons>(buildStarterWeaponStore());
export const range = writable<number>(1500);
export const selectedDistributor = writable<SelectedDistributor>(
    { size: 1, class: 'A', blueprint: '', experimentEffect: '' });
export const heatsinks = writable<number>(0);

// Calculation stores
export const sdpsExtraDelay = writable<number>(0);
export const timeOnTargetData = writable<TimeOnTargetData>(setEmptyTotStore());
