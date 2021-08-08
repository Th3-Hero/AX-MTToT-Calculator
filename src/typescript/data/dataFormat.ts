export enum WeaponType {
    FIXED = 'Fixed', GIMBAL = 'Gimballed', TURRET = 'Turret'
}

export enum WeaponSize {
    SMALL = 1, MEDIUM, LARGE, HUGE
}

export interface WeaponOption {
    mount: WeaponType;
    weaponSize: WeaponSize;
    clipSize: number;
    rof: number;
    reloadTime: number;
    distroDraw: number;
    axDamage: number;
    sustainedAxDps: number;
    armourPierce: number;
    falloffRange: number;
    maxRange: number;
    stdAmmoPercent: number;
    premAmmoPercent: number;
    nDps: number;
    falloffFactor: number;
}

export interface AxWeapon {
    fullName: string;
    internalName: string;
    options: WeaponOption[];
}

export interface SelectedWeapon {
    weaponName: string;
    size: WeaponSize;
    weaponType: WeaponType;
}

export interface SelectedWeapons {
    [name: number]: SelectedWeapon;
}

export interface Thargoid {
    name: string;
    armourRating: number;
    regenPerSecond: number;
    exertHp: number;
}

export interface SelectedDistributor {
    size: number;
    rating: string;
    blueprint: string;
    experimentEffect: string;
}

export interface DistributorModifier {
    name: string;
    internalName: string;
    shortName: string;
    weaponRechargeModifier: number;
}

export interface AmmoToTData {
    adjDps: number;
    tot100: string;
    tot75: string;
    tot50: string;
}

export interface InterceptorTotData {
    basicAmmo: AmmoToTData;
    standardAmmo: AmmoToTData;
    premiumAmmo: AmmoToTData;
}

export interface TimeOnTargetData {
    [name: string]: InterceptorTotData;
}
