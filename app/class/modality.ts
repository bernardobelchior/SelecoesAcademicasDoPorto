export enum Gender {
    MALE, FEMALE
};

export class Modality {
    private id: number;
    private static nextId : number = 0;

    constructor(private sport: string, private gender: Gender) {
      this.id = Modality.nextId;
      Modality.nextId++;
    }

    public getSport() : string {
      return this.sport;
    }

    public getGender() : Gender {
      return this.gender;
    }

    public getId() : number {
      return this.id;
    }
}
