import {Modality, Gender} from '../class/modality';
import {StudentsAssociation} from '../class/studentsAssociation.ts';
import {Team} from '../class/team.ts';
<<<<<<< HEAD
=======
import {Match} from '../class/match/match';
import {VolleyballMatch} from '../class/match/volleyballMatch';
>>>>>>> master

export class TestData {
    private static modalities: Modality[] = [
        new Modality('Futebol', Gender.MALE),
        new Modality('Voleibol', Gender.MALE),
        new Modality('Basquetebol', Gender.FEMALE),
        new Modality('Andebol', Gender.MALE)
    ];

    private static studentsAssociations: StudentsAssociation[] = [
<<<<<<< HEAD
<<<<<<< HEAD
        new StudentsAssociation('aefeup', 'aefeup',"images/aefeup.png"),
        new StudentsAssociation('aefep', 'aefep',"images/aefep.png"),
        new StudentsAssociation('aeisep', 'aeisep',"images/aeisep.png"),
        new StudentsAssociation('aefadeup', 'aefadeup',"images/aefadeup.png")
    ];;
=======
=======
>>>>>>> master
        new StudentsAssociation('AEFEUP', 'AEFEUP'),
        new StudentsAssociation('AEFEP', 'AEFEP'),
        new StudentsAssociation('AEISEP', 'AEISEP'),
        new StudentsAssociation('AEFADEUP', 'AEFADEUP')
    ];
<<<<<<< HEAD
>>>>>>> master
=======

    private static matches: Match[] = [
      new Match(TestData.studentsAssociations[0], TestData.studentsAssociations[1],
        3, 0, 'Pavilhão Luís Falcão', TestData.modalities[0], new Date(2016, 8, 6, 18, 30)),

        new VolleyballMatch(TestData.studentsAssociations[1], TestData.studentsAssociations[2],
        [25, 26, 25], [23, 24, 20], 'Pavilhão Luís Falcão', TestData.modalities[1],
      new Date(2016, 9, 11, 18, 30)),

      new Match(TestData.studentsAssociations[2], TestData.studentsAssociations[3],
         null, null, 'Pavilhão Luís Falcão', TestData.modalities[2], new Date(2016, 8, 17, 19, 30)),

        new Match(TestData.studentsAssociations[0], TestData.studentsAssociations[1],
          null, null, 'Pavilhão Luís Falcão', TestData.modalities[3], new Date(2016, 8, 18, 14, 0))
    ];
>>>>>>> master

    public static getStudentsAssociations() {
        return TestData.studentsAssociations;
    }

    public static getModalities() {
        return TestData.modalities;
    }

    public static getStudentsAssociationsByName(name: string) {
        for (var i = 0; i < TestData.studentsAssociations.length; i++) {
            if (TestData.studentsAssociations[i].getShortName() == name) {
                return TestData.studentsAssociations[i];
            }
        }
    }

    public static getModalityById(id: number) {
        return TestData.modalities[id];
    }
<<<<<<< HEAD

    public static getStudentsAssociationsById(id: number) {
        return TestData.studentsAssociations[id];
    }

    public static populateTeams() {
        for (let game of TestData.getGames()) {
            this.studentsAssociations[game.team1].addTeam(new Team(this.modalities[game.modality]));
            this.studentsAssociations[game.team2].addTeam(new Team(this.modalities[game.modality]));
        }
    }

    public static getStudentsAssociationsWithModality(modality: Modality): StudentsAssociation[] {
        let studentsAssociationsWithModality: StudentsAssociation[] = [];

        for (let studentAssociation of this.studentsAssociations) {
            if (studentAssociation.hasModality(modality)) {
                studentsAssociationsWithModality.push(studentAssociation);
            }
        }

        return studentsAssociationsWithModality;
=======

    public static getStudentsAssociationsById(id: number) {
        return TestData.studentsAssociations[id];
    }

    public static populateTeams() {
        for (let match of TestData.getMatches()) {
            match.getFirstTeam().addTeam(new Team(match.getModality()));
            match.getSecondTeam().addTeam(new Team(match.getModality()));
        }
>>>>>>> master
    }

    public static getStudentsAssociationsWithModality(modality: Modality): StudentsAssociation[] {
        let studentsAssociationsWithModality: StudentsAssociation[] = [];

        for (let studentAssociation of this.studentsAssociations) {
            if (studentAssociation.hasModality(modality)) {
                studentsAssociationsWithModality.push(studentAssociation);
            }
        }

        return studentsAssociationsWithModality;
    }


    public static getMatches(): Match[] {
        return TestData.matches;
    }
}
