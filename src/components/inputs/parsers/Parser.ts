import { SelectedDistributor, SelectedWeapons } from '../../../data/dataFormat';

export abstract class Parser {
    public constructor(
        protected readonly _shipBuild: ImportFormat,
    ) {
    }

    abstract shipName(): string;
    abstract parseDistributor(): SelectedDistributor;
    abstract parseWeapons(): SelectedWeapons;
}

export interface ImportFormat {
    [name: string]: any;
}
