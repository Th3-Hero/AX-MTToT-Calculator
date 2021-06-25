import { Distributor, DistributorModifier } from "./dataFormat";

const distributorRechargeData: { [name: string]: number } = {
    "1A": 1.8,
    "1A-G": 2.5,
    "1B": 1.7,
    "1C": 1.5,
    "1D": 1.4,
    "1E": 1.2,
    "2A": 2.2,
    "2A-G": 3.1,
    "2B": 2,
    "2C": 1.8,
    "2D": 1.6,
    "2E": 1.4,
    "3A": 2.8,
    "3A-G": 3.9,
    "3B": 2.5,
    "3C": 2.3,
    "3D": 2.1,
    "3E": 1.8,
    "4A": 3.5,
    "4A-G": 4.9,
    "4B": 3.2,
    "4C": 2.9,
    "4D": 2.6,
    "4E": 2.3,
    "5A": 4.3,
    "5A-G": 6,
    "5B": 4,
    "5C": 3.6,
    "5D": 3.2,
    "5E": 2.9,
    "6A": 5.2,
    "6A-G": 7.3,
    "6B": 4.7,
    "6C": 4.3,
    "6D": 3.9,
    "6E": 3.4,
    "7A": 6.1,
    "7A-G": 8.5,
    "7B": 5.6,
    "7C": 5.1,
    "7D": 4.6,
    "7E": 4.1,
    "8A": 7.2,
    "8A-G": 10.1,
    "8B": 6.6,
    "8C": 6,
    "8D": 5.4,
    "8E": 4.8
};

// TODO
export const distributors: Distributor[] = [
]

export const distributorBlueprints: DistributorModifier[] = [
    { name: 'Charge Enhanced', shortName: 'ce', weaponRechargeModifier: .45 },
    { name: 'Engine Focused', shortName: 'ef', weaponRechargeModifier: -0.05 },
    { name: 'High Charge Capacity', shortName: 'hc', weaponRechargeModifier: -0.18 },
    { name: 'Shielded', shortName: 'sh', weaponRechargeModifier: 0 },
    { name: 'System Focused', shortName: 'sf', weaponRechargeModifier: -0.15 },
    { name: 'Weapon Focused', shortName: 'wf', weaponRechargeModifier: 0.44 }
];

export const distributorExperimentEffects: DistributorModifier[] = [
    { name: 'Cluster Capacitors', shortName: 'cc', weaponRechargeModifier: -0.02 },
    { name: 'Double Braced', shortName: 'db', weaponRechargeModifier: 0 },
    { name: 'Flow Control', shortName: 'fc', weaponRechargeModifier: 0 },
    { name: 'Stripped Down', shortName: 'sd', weaponRechargeModifier: 0 },
    { name: 'Super Conduits', shortName: 'sc', weaponRechargeModifier: 0.04 }
];

export const distributorSizes: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8
];

// TODO: Address how to handle Guardian distributors. Maybe a toggle/checkbox that bypasses the setup flow
export const distributorClasses: string[] = [
    'A', 'B', 'C', 'D', 'E'
];
