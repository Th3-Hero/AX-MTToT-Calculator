// copy pasta format
// object naming format: weaponName|ClassSize|Type

import { WeaponData, WeaponTypes } from "./dataFormat";

export const gaussC2Fixed: WeaponData = {
    weaponName: "Guardian Gauss Cannon",
    weaponType: WeaponTypes.fixed,
    weaponSize: 2,
    weaponInformation: {
        clipSize: 80,
        rof: 0.487804878,
        reloadTime: 4,
        damage: 70,
        axPercent: 50,
        axDamage: 35.00,
        sustainedAxDps: 16.67,
        armourPierce: 140,
        falloffRange: 1500,
        maxRange: 3000,
        stdAmmoPercent: 1.15,
        premAmmoPercent: 1.30
    }
};

const gaussC1Fixed: WeaponData = {
    weaponName: "Guardian Gauss Cannon",
    weaponType: WeaponTypes.fixed,
    weaponSize: 1,
    weaponInformation: {
        clipSize: 80,
        rof: 0.487804878,
        reloadTime: 4,
        damage: 40,
        axPercent: 50,
        axDamage: 20.00,
        sustainedAxDps: 9.52,
        armourPierce: 140,
        falloffRange: 1500,
        maxRange: 3000,
        stdAmmoPercent: 1.15,
        premAmmoPercent: 1.30
    }
};

const plasmaC1Fixed: WeaponData = {
    weaponName: "Guardian Plasma Charger",
    weaponType: WeaponTypes.fixed,
    weaponSize: 1,
    weaponInformation: {
        clipSize: 15,
        rof: 0.5,
        reloadTime: 3,
        damage: 51,
        axPercent: 50,
        axDamage: 25.50,
        sustainedAxDps: 11.59,
        armourPierce: 65,
        falloffRange: 1000,
        maxRange: 3000,
        stdAmmoPercent: 1.15,
        premAmmoPercent: 1.30
    }
};

const plasmaC3Fixed: WeaponData = {
    weaponName: "Guardian Plasma Charger",
    weaponType: WeaponTypes.fixed,
    weaponSize: 3,
    weaponInformation: {
        clipSize: 15,
        rof: 0.5555555556,
        reloadTime: 3,
        damage: 119,
        axPercent: 50,
        axDamage: 59.50,
        sustainedAxDps: 29.75,
        armourPierce: 95,
        falloffRange: 1000,
        maxRange: 3000,
        stdAmmoPercent: 1.15,
        premAmmoPercent: 1.30
    }
};

const shardsC1Fixed: WeaponData = {
    weaponName: "Guardian Shard Cannon",
    weaponType: WeaponTypes.fixed,
    weaponSize: 1,
    weaponInformation: {
        clipSize: 5,
        rof: 1.667,
        reloadTime: 5,
        damage: 43.68,
        axPercent: 50,
        axDamage: 21.84,
        sustainedAxDps: 13.65,
        armourPierce: 30,
        falloffRange: 1700,
        maxRange: 1700,
        stdAmmoPercent: 1.15,
        premAmmoPercent: 1.30
    }
};

const shardsC2Fixed: WeaponData = {
    weaponName: "Guardian Shard Cannon",
    weaponType: WeaponTypes.fixed,
    weaponSize: 2,
    weaponInformation: {
        clipSize: 5,
        rof: 1.667,
        reloadTime: 5,
        damage: 81.24,
        axPercent: 50,
        axDamage: 40.62,
        sustainedAxDps: 25.39,
        armourPierce: 45,
        falloffRange: 1700,
        maxRange: 1700,
        stdAmmoPercent: 1.15,
        premAmmoPercent: 1.30
    }
};

const shardsC3Fixed: WeaponData = {
    weaponName: "Guardian Shard Cannon",
    weaponType: WeaponTypes.fixed,
    weaponSize: 3,
    weaponInformation: {
        clipSize: 5,
        rof: 1.667,
        reloadTime: 5,
        damage: 114,
        axPercent: 50,
        axDamage: 57.00,
        sustainedAxDps: 35.63,
        armourPierce: 60,
        falloffRange: 1700,
        maxRange: 1700,
        stdAmmoPercent: 1.15,
        premAmmoPercent: 1.30
    }
};

const axMultiCannonC2Fixed: WeaponData = {
    weaponName: "Anti-Xeno Multi Cannon",
    weaponType: WeaponTypes.fixed,
    weaponSize: 2,
    weaponInformation: {
        clipSize: 100,
        rof: 7.14,
        reloadTime: 4,
        damage: 3.31,
        axPercent: 66.16,
        axDamage: 2.19,
        sustainedAxDps: 12.17,
        armourPierce: 17,
        falloffRange: 2000,
        maxRange: 4000,
        stdAmmoPercent: 1.05,
        premAmmoPercent: 1.10
    }
};

const axMultiCannonC3Fixed: WeaponData = {
    weaponName: "Anti-Xeno Multi Cannon",
    weaponType: WeaponTypes.fixed,
    weaponSize: 3,
    weaponInformation: {
        clipSize: 100,
        rof: 5.88,
        reloadTime: 4,
        damage: 6.12,
        axPercent: 64.19,
        axDamage: 3.92,
        sustainedAxDps: 18.69,
        armourPierce: 33,
        falloffRange: 2000,
        maxRange: 4000,
        stdAmmoPercent: 1.05,
        premAmmoPercent: 1.10
    }
};

const axMultiCannonC3Turreted: WeaponData = {
    weaponName: "Anti-Xeno Multi Cannon",
    weaponType: WeaponTypes.turreted,
    weaponSize: 3,
    weaponInformation: {
        clipSize: 90,
        rof: 6.25,
        reloadTime: 4,
        damage: 3.31,
        axPercent: 64.19,
        axDamage: 2.12,
        sustainedAxDps: 10.39,
        armourPierce: 33,
        falloffRange: 2000,
        maxRange: 4000,
        stdAmmoPercent: 1.05,
        premAmmoPercent: 1.10
    }
};

const axMissileRackC2Dumbfire: WeaponData = {
    weaponName: "Anti-Xeno Missile Rack",
    weaponType: WeaponTypes.dumbFire,
    weaponSize: 2,
    weaponInformation: {
        clipSize: 8,
        rof: 0.50,
        reloadTime: 5,
        damage: 64.00,
        axPercent: 57.81,
        axDamage: 37.00,
        sustainedAxDps: 14.10,
        armourPierce: 60,
        falloffRange: 4000,
        maxRange: 4000,
        stdAmmoPercent: 1.05,
        premAmmoPercent: 1.10
    }
};

const axMissileRackC3Dumbfire: WeaponData = {
    weaponName: "Anti-Xeno Missile Rack",
    weaponType: WeaponTypes.dumbFire,
    weaponSize: 3,
    weaponInformation: {
        clipSize: 12,
        rof: 0.50,
        reloadTime: 5,
        damage: 64.00,
        axPercent: 57.81,
        axDamage: 37.00,
        sustainedAxDps: 15.31,
        armourPierce: 60,
        falloffRange: 4000,
        maxRange: 4000,
        stdAmmoPercent: 1.05,
        premAmmoPercent: 1.10
    }
};
