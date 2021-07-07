import { Thargoid } from './dataFormat';

export const cyclops: Thargoid = {
    name: "Cyclops",
    armourRating: 100,
    regenPerSecond: 3.2,
    exertHp: 160
};

export const basilisk: Thargoid = {
    name: "Basilisk",
    armourRating: 140,
    regenPerSecond: 7.2,
    exertHp: 360
};

export const medusa: Thargoid = {
    name: "Medusa",
    armourRating: 175,
    regenPerSecond: 10,
    exertHp: 500
};

export const hydra: Thargoid = {
    name: "Hydra",
    armourRating: 230,
    regenPerSecond: 12.8,
    exertHp: 640
};

export const THARGOID_TYPES = [
    cyclops, basilisk, medusa, hydra
];
