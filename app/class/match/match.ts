import {Team} from '../team';
import {Modality} from '../modality';
import {StudentsAssociation} from '../studentsAssociation';

export class Match {
    constructor(private firstTeam: StudentsAssociation, private secondTeam: StudentsAssociation,
        private firstScore: number, private secondScore: number, private local: string,
        private modality: Modality, private date: Date) {

    }

    public getFirstTeam(): StudentsAssociation {
        return this.firstTeam;
    }

    public getSecondTeam(): StudentsAssociation {
        return this.secondTeam;
    }

    public getFirstScore(): number {
        return this.firstScore;
    }

    public getSecondScore(): number {
        return this.secondScore;
    }

    public getLocal(): string {
        return this.local;
    }

    public getModality(): Modality {
        return this.modality;
    }

    public getDate(): Date {
        return this.date;
    }
}
