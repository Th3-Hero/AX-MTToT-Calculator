export enum WeaponTypes {
    fixed = "Fixed",
    gimballed = "Gimballed",
    turreted = "Turreted",
    dumbFire = "Dumbfire"
}

export interface WeaponInformationData {
    clipSize: number;
    rof: number;
    reloadTime: number;
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

export interface WeaponData {
    weaponName: string;
    weaponType: WeaponTypes;
    weaponSize: number;
    weaponInformation: WeaponInformationData;
}

export interface GoidData {
    name: string;
    armourRating: number;
    regenPerSecond: number;
    exertHP: number;
}

export interface DistributorEngineeringData {
    effectName: string;
    weaponRechargePercent: number;
    experimentalEffect1: string;
    experimentalEffectRechargePercent1: number;
    experimentalEffect2: string;
    experimentalEffectRechargePercent2: number;
}
