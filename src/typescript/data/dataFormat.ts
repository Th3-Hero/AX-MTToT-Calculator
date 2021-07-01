export enum WeaponType {
    FIXED = "Fixed",
    GIMBALLED = "Gimballed",
    TURRETED = "Turreted",
    DUMB_FIRE = "Dumbfire"
}

export interface WeaponInformation {
    weaponSize: number;
    clipSize: number;
    rof: number;
    reloadTime: number;
    distroDraw: number;
    damage: number;
    axPercent: number;
    axDamage: number;
    sustainedAxDps: number;
    armourPierce: number;
    falloffRange: number;
    maxRange: number;
    stdAmmoPercent: number;
    premAmmoPercent: number;
}

export interface AxWeapon {
    weaponName: string;
    shortName: string
    weaponType: WeaponType;
    options: WeaponInformation[];
}

export interface SelectedWeapon {
    name: string;
    class: number;
}

export interface Thargoid {
    name: string;
    armourRating: number;
    regenPerSecond: number;
    exertHp: number;
}

export interface SelectedDistributor {
    size: number;
    class: string;
    blueprint: string;
    experimentEffect: string;
}

export interface DistributorModifier {
    name: string;
    shortName: string;
    weaponRechargeModifier: number;
}
