import {
    SelectedDistributor,
    SelectedWeapons,
    TimeOnTargetData,
    WeaponType
} from '../../data/dataFormat';
import { MAX_AX_WEAPONS } from './util';
import { THARGOID_TYPES } from '../../data/thargoidData';
import { writable } from 'svelte/store';

export const emptyWeaponStore = (): SelectedWeapons => {
    const weapons: SelectedWeapons = {}

    for (let i = 0; i < MAX_AX_WEAPONS; i++) {
        weapons[i] = { weaponName: '', size: undefined, weaponType: WeaponType.FIXED };
    }
    return weapons;
};

export const emptyDistributorStore = (): SelectedDistributor => {
    return { size: 1, rating: 'A', blueprint: undefined, experimentEffect: undefined };
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
export const selectedWeapons = writable<SelectedWeapons>(emptyWeaponStore());
export const range = writable<number>(1500);
export const selectedDistributor = writable<SelectedDistributor>(emptyDistributorStore());
export const heatsinks = writable<number>(0);

// Calculation stores
export const sdpsExtraDelay = writable<number>(0);
export const timeOnTargetData = writable<TimeOnTargetData>(setEmptyTotStore());
