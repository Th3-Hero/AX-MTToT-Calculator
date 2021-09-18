import {
    SelectedDistributor,
    SelectedWeapons,
    WeaponSize,
    WeaponType
} from '../../../data/dataFormat';
import {
    distributorBlueprints,
    distributorExperimentEffects,
    distributorRatings,
    distributorSizes
} from '../../../data/distributorData';
import { emptyDistributorStore, emptyWeaponStore } from '../../mttot/store';
import { AX_WEAPONS } from '../../../data/weaponData';
import { MAX_AX_WEAPONS } from '../../mttot/util';
import { Parser } from './Parser';

export class EdsyParser extends Parser {
    shipName(): string {
        return '';
    }

    parseDistributor(): SelectedDistributor {
        const selectedDistributor = emptyDistributorStore();

        const distributor: EdsyDistributor = this._shipBuild.data?.Modules?.find(module => module.Slot.toLowerCase() === 'powerdistributor');
        if (distributor == null) {
            return selectedDistributor;
        }

        const distributorData = distributor.Item.split('_');
        if (distributorData.length !== 3 && distributorData.length !== 4) {
            return selectedDistributor;
        }

        let rating: string;
        if (distributorData[1].includes('guardian')) {
            rating = 'G';
        } else {
            rating = distributorRatings[distributorData[3].match(/\d/)[0]];
        }

        const size = Number(distributorData[2].match(/\d/)[0]);
        if (!distributorSizes.includes(size) || !distributorRatings.includes(rating)) {
            return selectedDistributor;
        }

        selectedDistributor.size = size;
        selectedDistributor.rating = rating;

        const distributorEngineering = distributor.Engineering;
        if (distributorEngineering) {
            selectedDistributor.blueprint = distributorBlueprints.find(modifier =>
                modifier.internalName === distributorEngineering.BlueprintName.toLowerCase())?.shortName;

            if (distributorEngineering.ExperimentalEffect) {
                selectedDistributor.experimentEffect = distributorExperimentEffects.find(modifier =>
                    modifier.internalName === distributorEngineering.ExperimentalEffect.toLowerCase())?.shortName;
            }
        }

        return selectedDistributor;
    }

    parseWeapons(): SelectedWeapons {
        const selectedWeapons = emptyWeaponStore();

        const hardpoints: EdsyHardpoint[] = this._shipBuild.data?.Modules?.filter(module => module.Slot.toLowerCase().includes('hardpoint'));
        if (hardpoints.length === 0) {
            return selectedWeapons;

        }
        const importedAxWeapons = hardpoints.filter(hardpoint => hardpoint.Item?.startsWith('hpt_guardian') ||
                                                                 hardpoint.Item?.startsWith('hpt_at'))
                                            .slice(0, MAX_AX_WEAPONS);
        if (importedAxWeapons.length === 0) {
            return selectedWeapons;
        }

        for (let i = 0; i < importedAxWeapons.length; i++) {
            const parsedName = importedAxWeapons[i].Item;
            if (!parsedName) {
                continue;
            }

            const splitName = parsedName.split('_');
            if (splitName.length !== 4 && splitName.length !== 5) {
                continue;
            }

            const finalIndex = splitName.length - 1;
            const weaponName = splitName[finalIndex - 2];
            const weaponType = WeaponType[splitName[finalIndex - 1].toUpperCase()];
            const size = WeaponSize[splitName[finalIndex].toUpperCase()];
            if (!EdsyParser.validInput(weaponName, weaponType, size)) {
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

interface EdsyDistributor {
    Slot: string;
    Item: string;
    Engineering?: {
        BlueprintName: string
        ExperimentalEffect?: string
        [otherField: string]: string
    }
    [otherField: string]: any;
}

interface EdsyHardpoint {
    Slot: string;
    Item: string;
    [otherField: string]: any;
}
