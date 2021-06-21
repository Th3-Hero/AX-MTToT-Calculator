enum weaponTypes {
    fixed = "Fixed",
    gimballed = "Gimballed",
    turreted = "Turreted",
    dumbFire = "Dumbfire"
}

interface weaponInformationData {
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

interface weaponData {
    weaponName: string;
    weaponType: weaponTypes;
    weaponSize: number;
    weaponInformation: weaponInformationData;
}

interface goidData {
    name: string;
    armourRating: number;
    regenPerSecond: number;
    exertHP: number;
}