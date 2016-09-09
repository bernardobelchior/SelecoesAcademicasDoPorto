import {Modality} from './modality';

export class Team {
    //TODO: Create actual player class.
    private players: string[];

    constructor(private modality: Modality) {
      this.players = [];
    }

    public getModality(): Modality {
        return this.modality;
    }
}
