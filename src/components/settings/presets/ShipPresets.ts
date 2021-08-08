import { SelectedDistributor, SelectedWeapons, WeaponType } from '../../../typescript/data/dataFormat';

const empty: ShipPreset = {
    weapons: {
        0: { weaponName: '', size: undefined, weaponType: WeaponType.FIXED },
        1: { weaponName: '', size: undefined, weaponType: WeaponType.FIXED },
        2: { weaponName: '', size: undefined, weaponType: WeaponType.FIXED },
        3: { weaponName: '', size: undefined, weaponType: WeaponType.FIXED }
    },
    distributor: { size: 1, rating: 'A', blueprint: undefined, experimentEffect: undefined },
    heatsinks: 0
};

const chieftain: ShipPreset = {
    weapons: {
        0: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        1: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        2: { weaponName: 'gausscannon', size: 1, weaponType: WeaponType.FIXED },
        3: { weaponName: 'gausscannon', size: 1, weaponType: WeaponType.FIXED }
    },
    distributor: { size: 6, rating: 'A', blueprint: 'ce', experimentEffect: 'sc' },
    heatsinks: 1
};

const challenger: ShipPreset = {
    weapons: {
        0: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        1: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        2: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        3: { weaponName: '', size: undefined, weaponType: WeaponType.FIXED }
    },
    distributor: { size: 6, rating: 'A', blueprint: 'ce', experimentEffect: 'sc' },
    heatsinks: 1
};

const cutter: ShipPreset = {
    weapons: {
        0: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        1: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        2: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        3: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED }
    },
    distributor: { size: 7, rating: 'A', blueprint: 'wf', experimentEffect: 'sc' },
    heatsinks: 1
};

const kraitMk2: ShipPreset = {
    weapons: {
        0: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        1: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        2: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED },
        3: { weaponName: 'gausscannon', size: 2, weaponType: WeaponType.FIXED }
    },
    distributor: { size: 7, rating: 'A', blueprint: 'ce', experimentEffect: 'sc' },
    heatsinks: 1
};

export const presets: Map<string, ShipPreset> = new Map([
    ['Empty', empty],
    ['Chieftain', chieftain],
    ['Challenger', challenger],
    ['Cutter', cutter],
    ['Krait Mk2', kraitMk2]
]);

interface ShipPreset {
    weapons: SelectedWeapons;
    distributor: SelectedDistributor;
    heatsinks: number;
}