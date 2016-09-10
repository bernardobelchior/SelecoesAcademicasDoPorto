import {Modality} from './modality';
import {Team} from './team';

export class StudentsAssociation {
    public name: string;
    private static nextId: number = 0;
    private id: number;
    private activeTeams: Set<Team>;

    constructor(private fullName: string, private shortName: string) {
        this.name = fullName;
        this.id = StudentsAssociation.nextId;
        StudentsAssociation.nextId++;
        this.activeTeams = new Set<Team>();
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
        this.activeTeams.add(team);
    }

    public getTeams(): Set<Team> {
        /*var modalities: string[] = [];
        var setIter = this.activeModalities.entries();
        for (var i = 0; i < this.activeModalities.size; i++) {
            modalities.push(setIter.next().value[0].getModalityName());
        }
        console.log(modalities);
        return modalities;*/
        return this.activeTeams;
    }

    public getTeamsArray(): Team[] {
        let teams: Team[] = [];

        this.activeTeams.forEach(function(team) {
            teams.push(team);
        });

        return teams;
    }

    public getTeamByName(name: string) {
        var modalities: string[];
        for (var i = 0; i < this.activeTeams.size; i++) {
            if (this.activeTeams.keys().return().value.getModalityName() == name)
                return this.activeTeams.keys().return().value;
        }
    }
}
