import {Modality} from './modality';
import {Team} from './team';

export class StudentsAssociation {
    private static nextId: number;
    private id: number;
    private activeModalities: Set<Team>;

    constructor(private fullName: string, private shortName: string) {
        this.id = StudentsAssociation.nextId;
        StudentsAssociation.nextId++;
        this.activeModalities = new Set<Team>();
    }

    public addTeam(team: Team): void {
        this.activeModalities.add(team);
    }
}
