import {Modality, Gender} from '../class/modality';
import {StudentsAssociation} from '../class/studentsAssociation.ts';
import {Team} from '../class/team.ts';
import {Match} from '../class/match/match';
import {VolleyballMatch} from '../class/match/volleyballMatch';

export class TestData {
    private static modalities: Modality[] = [
        new Modality('Futebol', Gender.MALE),
        new Modality('Voleibol', Gender.MALE),
        new Modality('Basquetebol', Gender.FEMALE),
        new Modality('Andebol', Gender.MALE)
    ];

    private static studentsAssociations: StudentsAssociation[] = [
        new StudentsAssociation('AEFEUP', 'AEFEUP', "images/aefeup.png", "images/aefeupImage.png"),
        new StudentsAssociation('AEFEP', 'AEFEP', "images/aefep.png","images/aefepImg.png"),
        new StudentsAssociation('AEISEP', 'AEISEP', "images/aeisep.png","images/aeisepImg.png"),
        new StudentsAssociation('AEFADEUP', 'AEFADEUP', "images/aefadeup.png","images/aefadeupImg.jpg")
    ];;


    private static matches: Match[] = [
        new Match(TestData.studentsAssociations[0], TestData.studentsAssociations[1],
            3, 0, 'Pavilhão Luís Falcão', TestData.modalities[0], new Date(2016, 8, 6, 18, 30)),

        new VolleyballMatch(TestData.studentsAssociations[1], TestData.studentsAssociations[2],
            [25, 26, 25], [23, 24, 20], 'Pavilhão Luís Falcão', TestData.modalities[1],
            new Date(2016, 9, 11, 18, 30)),

        new Match(TestData.studentsAssociations[2], TestData.studentsAssociations[3],
            null, null, 'Pavilhão Luís Falcão', TestData.modalities[2], new Date(2016, 8, 17, 19, 30)),

        new Match(TestData.studentsAssociations[0], TestData.studentsAssociations[1],
            null, null, 'Pavilhão Luís Falcão', TestData.modalities[3], new Date(2016, 8, 17, 14, 0))
    ];

    public static getStudentsAssociations() {
        return TestData.studentsAssociations;
    }

    public static getModalities() {
        return TestData.modalities;
    }

    public static getStudentsAssociationsByName(name: string) {
        for (var i = 0; i < TestData.studentsAssociations.length; i++) {
            if (TestData.studentsAssociations[i].getShortName() === name) {
                return TestData.studentsAssociations[i];
            }
        }
    }

    public static getModalityById(id: number) {
        return TestData.modalities[id];
    }

    public static getStudentsAssociationsById(id: number) {
        return TestData.studentsAssociations[id];
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

    public static populateTeams() {
        for (let match of TestData.getMatches()) {
            match.getFirstTeam().addTeam(new Team(match.getModality()));
            match.getSecondTeam().addTeam(new Team(match.getModality()));
        }


        let firstNames: string[] = ['Manuel', 'Bernardo', 'Pedro', 'Nuno', 'Maria João', 'João', 'Filipa', 'Luísa', 'Inês', 'André'];
        let lastNames: string[] = ['Sousa', 'Belchior', 'Costa', 'Ramos', 'Mira Paulo', 'Carvalho', 'Moreira', 'Magno', 'Teixeira', 'Ferreira', 'Reis'];

        for (let studentsAssociation of TestData.studentsAssociations) {
            let teams = studentsAssociation.getTeamsArray();
            for (let i = 0; i < Math.random() * 9 + 10; i++) {
                teams[Math.trunc(Math.random() * teams.length)].addPlayer(firstNames[Math.trunc(Math.random() * firstNames.length)] + ' ' + lastNames[Math.trunc(Math.random() * lastNames.length)]);
            }
        }
    }

    public static getMatches(): Match[] {
        return TestData.matches;
    }
}
