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

    public getModalityName(): string{
      return this.modality.getSport();
    }

    public getModalityFullName(): string {
      return this.modality.getFullName();
    }

    public getPlayers(): string[]{
      return this.players;
    }
}
