import { AxWeapon, WeaponType } from "./dataFormat";

// TODO: There is no great representation of fixed vs turret right now.
//  Having to maintain multiple objects is not ideal, but it will work for a short time.
//  Agreed one object would be better especially if we add weapons it will be a nightmare currently - Hero

// TODO: We may also want to add more weapons in future to have all AX weapon classes
//  However that would need to be done after we rework the weapon data storage

// TODO: When we rework this we can remove some of the unused data. Only gauss uses all the data
// not sure if interfaces can support optional values

export const gauss: AxWeapon = {
    weaponName: 'Guardian Gauss Cannon',
    shortName: 'gauss',
    weaponType: WeaponType.FIXED,
    options: [
        {
            weaponSize: 1,
            clipSize: 80,
            rof: 0.487804878,
            reloadTime: 4,
            distroDraw: 3.8,
            damage: 40,
            axPercent: 50,
            axDamage: 20.00,
            sustainedAxDps: 9.52,
            nDps: 0,
            armourPierce: 140,
            falloffRange: 1500,
            falloffFactor: 1,
            maxRange: 3000,
            stdAmmoPercent: 1.15,
            premAmmoPercent: 1.30
        },
        {
            weaponSize: 2,
            clipSize: 80,
            rof: 0.487804878,
            reloadTime: 4,
            distroDraw: 7.2,
            damage: 70,
            axPercent: 50,
            axDamage: 35.00,
            sustainedAxDps: 16.67,
            nDps: 0,
            armourPierce: 140,
            falloffRange: 1500,
            falloffFactor: 1,
            maxRange: 3000,
            stdAmmoPercent: 1.15,
            premAmmoPercent: 1.30
        }
    ]
};

const plasma: AxWeapon = {
    weaponName: 'Guardian Plasma Charger',
    shortName: 'plasma',
    weaponType: WeaponType.FIXED,
    options: [
        {
            weaponSize: 1,
            clipSize: 15,
            rof: 0.5,
            reloadTime: 3,
            distroDraw: 0.68,
            damage: 51,
            axPercent: 50,
            axDamage: 25.50,
            sustainedAxDps: 11.59,
            nDps: 0,
            armourPierce: 65,
            falloffRange: 1000,
            falloffFactor: 1,
            maxRange: 3000,
            stdAmmoPercent: 1.15,
            premAmmoPercent: 1.30
        },
        {
            weaponSize: 3,
            clipSize: 15,
            rof: 0.5555555556,
            reloadTime: 3,
            distroDraw: 1.25,
            damage: 119,
            axPercent: 50,
            axDamage: 59.50,
            sustainedAxDps: 29.75,
            nDps: 0,
            armourPierce: 95,
            falloffRange: 1000,
            falloffFactor: 1,
            maxRange: 3000,
            stdAmmoPercent: 1.15,
            premAmmoPercent: 1.30
        }
    ]
};

const shard: AxWeapon = {
    weaponName: 'Guardian Shard Cannon',
    shortName: 'shard',
    weaponType: WeaponType.FIXED,
    options: [
        {
            weaponSize: 1,
            clipSize: 5,
            rof: 1.667,
            reloadTime: 5,
            distroDraw: 0.42,
            damage: 43.68,
            axPercent: 50,
            axDamage: 21.84,
            sustainedAxDps: 13.65,
            nDps: 0,
            armourPierce: 30,
            falloffRange: 1700,
            falloffFactor: 1,
            maxRange: 1700,
            stdAmmoPercent: 1.15,
            premAmmoPercent: 1.30
        },
        {
            weaponSize: 2,
            clipSize: 5,
            rof: 1.667,
            reloadTime: 5,
            distroDraw: 0.65,
            damage: 81.24,
            axPercent: 50,
            axDamage: 40.62,
            sustainedAxDps: 25.39,
            nDps: 0,
            armourPierce: 45,
            falloffRange: 1700,
            falloffFactor: 1,
            maxRange: 1700,
            stdAmmoPercent: 1.15,
            premAmmoPercent: 1.30
        },
        {
            weaponSize: 3,
            clipSize: 5,
            rof: 1.667,
            reloadTime: 5,
            distroDraw: 1.4,
            damage: 114,
            axPercent: 50,
            axDamage: 57.00,
            sustainedAxDps: 35.63,
            nDps: 0,
            armourPierce: 60,
            falloffRange: 1700,
            falloffFactor: 1,
            maxRange: 1700,
            stdAmmoPercent: 1.15,
            premAmmoPercent: 1.30
        }
    ]
}

const axmc: AxWeapon = {
    weaponName: 'Anti-Xeno Multi Cannon',
    shortName: 'axmc',
    weaponType: WeaponType.FIXED,
    options: [
        {
            weaponSize: 2,
            clipSize: 100,
            rof: 7.14,
            reloadTime: 4,
            distroDraw: 0.11,
            damage: 3.31,
            axPercent: 66.16,
            axDamage: 2.19,
            sustainedAxDps: 12.17,
            nDps: 0,
            armourPierce: 17,
            falloffRange: 2000,
            falloffFactor: 1,
            maxRange: 4000,
            stdAmmoPercent: 1.05,
            premAmmoPercent: 1.10
        },
        {
            weaponSize: 3,
            clipSize: 100,
            rof: 5.88,
            reloadTime: 4,
            distroDraw: 0.18,
            damage: 6.12,
            axPercent: 64.19,
            axDamage: 3.92,
            sustainedAxDps: 18.69,
            nDps: 0,
            armourPierce: 33,
            falloffRange: 2000,
            falloffFactor: 1,
            maxRange: 4000,
            stdAmmoPercent: 1.05,
            premAmmoPercent: 1.10
        }
    ]
};

const axmct: AxWeapon = {
    weaponName: 'Anti-Xeno Multi Cannon (Turret)',
    shortName: 'axmct',
    weaponType: WeaponType.TURRETED,
    options: [
        {
            weaponSize: 3,
            clipSize: 90,
            rof: 6.25,
            reloadTime: 4,
            distroDraw: 0.06,
            damage: 3.31,
            axPercent: 64.19,
            axDamage: 2.12,
            sustainedAxDps: 10.39,
            nDps: 0,
            armourPierce: 33,
            falloffRange: 2000,
            falloffFactor: 1,
            maxRange: 4000,
            stdAmmoPercent: 1.05,
            premAmmoPercent: 1.10
        }
    ]
};

const axmr: AxWeapon = {
    weaponName: 'Anti-Xeno Missile Rack',
    shortName: 'axmr',
    weaponType: WeaponType.DUMB_FIRE,
    options: [
        {
            weaponSize: 2,
            clipSize: 8,
            rof: 0.50,
            reloadTime: 5,
            distroDraw: 0.14,
            damage: 64.00,
            axPercent: 57.81,
            axDamage: 37.00,
            sustainedAxDps: 14.10,
            nDps: 0,
            armourPierce: 60,
            falloffRange: 4000,
            falloffFactor: 1,
            maxRange: 4000,
            stdAmmoPercent: 1.05,
            premAmmoPercent: 1.10
        },
        {
            weaponSize: 3,
            clipSize: 12,
            rof: 0.50,
            reloadTime: 5,
            distroDraw: 0.24,
            damage: 64.00,
            axPercent: 57.81,
            axDamage: 37.00,
            sustainedAxDps: 15.31,
            nDps: 0,
            armourPierce: 60,
            falloffRange: 4000,
            falloffFactor: 1,
            maxRange: 4000,
            stdAmmoPercent: 1.05,
            premAmmoPercent: 1.10
        }
    ]
};


export const AX_WEAPONS = [
    gauss, plasma, shard, axmc, axmct, axmr
];
