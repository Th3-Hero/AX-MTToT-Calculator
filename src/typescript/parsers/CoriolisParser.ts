import { Parser } from './Parser';
import { SelectedDistributor, SelectedWeapons, WeaponType, WeaponSize } from '../data/dataFormat';
import {
    distributorBlueprints,
    distributorExperimentEffects,
    distributorRatings,
    distributorSizes
} from '../data/distributorData';
import { MAX_AX_WEAPONS } from '../util';
import { buildEmptyWeaponStore } from '../store';
import { AX_WEAPONS } from '../data/weaponData';

export class CoriolisParser extends Parser {
    shipName(): string {
        return this._shipBuild.ship;
    }

    parseDistributor(): SelectedDistributor {
        const distributor: CoriolisDistributor = this._shipBuild.components?.standard?.powerDistributor;
        if (!distributor) {
            return null;
        }

        let rating: string;
        if (distributor.name?.includes('Guardian')) {
            rating = 'G';
        } else {
            rating = distributor.rating;
        }

        const size = distributor.class;
        if (!distributorSizes.includes(size) || !distributorRatings.includes(rating)) {
            return null;
        }

        const distributorBlueprint = distributor.blueprint;
        let blueprint: string = undefined;
        let experimentEffect: string = undefined;
        if (distributorBlueprint) {
            blueprint = distributorBlueprints.find(modifier =>
                modifier.internalName === distributorBlueprint.fdname.toLowerCase())?.shortName;

            if (distributorBlueprint.special) {
                experimentEffect = distributorExperimentEffects.find(modifier =>
                    modifier.internalName === distributorBlueprint.special.edname.toLowerCase())?.shortName;
            }
        }

        return {
            size,
            rating,
            blueprint,
            experimentEffect
        };
    }

    parseWeapons(): SelectedWeapons {
        const hardpoints: CoriolisHardpoint[] = this._shipBuild.components?.hardpoints;
        if (!hardpoints || hardpoints.length === 0) {
            return null;
        }

        // filter(Boolean) uses coercion to filter out nulls, as Coriolis provides unset weapons
        const importedAxWeapons = hardpoints.filter(Boolean)
                                            .filter(hardpoint => hardpoint.group?.startsWith('Guardian ') ||
                                                                 hardpoint.group?.startsWith('AX '))
                                            .slice(0, MAX_AX_WEAPONS);
        if (importedAxWeapons.length === 0) {
            return null;
        }

        const selectedWeapons = buildEmptyWeaponStore();
        for (let i = 0; i < importedAxWeapons.length; i++) {
            const parsedName = importedAxWeapons[i].group;
            if (!parsedName) {
                continue;
            }

            const axWeapon = AX_WEAPONS.find(weapon => weapon.fullName === parsedName);
            const weaponName = axWeapon.internalName;
            const weaponType = importedAxWeapons[i].mount as WeaponType;
            const size = importedAxWeapons[i].class;
            if (!CoriolisParser.validInput(weaponName, weaponType, size)) {
                continue;
            }

            selectedWeapons[i] = { weaponName, weaponType, size };
        }
        return selectedWeapons;
    }

    private static validInput(weaponName: string, weaponType: WeaponType, size: WeaponSize): boolean {
        const axWeapon = AX_WEAPONS.find(weapon => weapon.internalName === weaponName);
        const foundOption = axWeapon?.options.find(option => option.weaponSize === size && option.mount === weaponType);

        return foundOption !== undefined;
    }
}

interface CoriolisDistributor {
    class: number;
    rating: string;
    enabled: boolean;
    priority: number;
    name?: string;
    blueprint?: {
        fdname: string;
        special?: {
            edname: string;
            [specialFields: string]: unknown;
        };
        [blueprintFields: string]: unknown;
    };
}

interface CoriolisHardpoint {
    class: number;
    group: string;
    mount: string;
    [otherField: string]: any;
}
