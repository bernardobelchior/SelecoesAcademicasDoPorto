import {Modality} from './modality';
import {Team} from './team';

export class StudentsAssociation {
    public name: string;
    private static nextId: number = 0;
    private id: number;
    private activeModalities: Set<Team>;

    constructor(private fullName: string, private shortName: string) {
        this.name = fullName;
        this.id = StudentsAssociation.nextId;
        StudentsAssociation.nextId++;
        this.activeModalities = new Set<Team>();
    }

    public getFullName() {
        return this.fullName;
    }

    public getShortName() {
        return this.shortName;
    }

    public getId() {
      return this.id;
    }

    public addTeam(team: Team): void {
        this.activeModalities.add(team);
    }

    public getTeams() {
        /*var modalities: string[] = [];
        var setIter = this.activeModalities.entries();
        for (var i = 0; i < this.activeModalities.size; i++) {
            modalities.push(setIter.next().value[0].getModalityName());
        }
        console.log(modalities);
        return modalities;*/
        return this.activeModalities;
    }

    public getTeamByName(name: string) {
        var modalities: string[];
        for (var i = 0; i < this.activeModalities.size; i++) {
            if (this.activeModalities.keys().return().value.getModalityName() == name)
                return this.activeModalities.keys().return().value;
        }
    }
}