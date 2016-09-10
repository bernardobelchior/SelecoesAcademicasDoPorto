import {Modality} from './modality';
import {Team} from './team';

export class StudentsAssociation {
    public name: string;
    private srcIcon: string;
    private static nextId: number;
    private id: number;
    private activeModalities: Set<Team>;

    constructor(private fullName: string, private shortName: string, private scrIcon: string) {
        this.name = fullName;
        this.srcIcon=scrIcon;
        this.id = StudentsAssociation.nextId;
        StudentsAssociation.nextId++;
    }

    public getSrcIcon(){
      return this.srcIcon;
    }

    public getFullName() {
        return this.fullName;
    }

    public getShortName() {
        return this.shortName;
    }
    public addTeam(team: Team): void {
        this.activeModalities.add(team);
    }

    public getTeams() {
        var modalities: string[] = [];
        for (var i = 0; i < this.activeModalities.size; i++) {
            modalities.push(this.activeModalities.keys().return().value.getModalityName());
        }
        return modalities;
    }

    public getTeamByName(name: string) {
        var modalities: string[];
        for (var i = 0; i < this.activeModalities.size; i++) {
            if (this.activeModalities.keys().return().value.getModalityName() == name)
                return this.activeModalities.keys().return().value;
        }
    }
}
