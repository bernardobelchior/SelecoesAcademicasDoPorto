import {Set} from 'typescript-collections';
import {Modality, Gender} from '../class/modality';
import {StudentsAssociation} from '../class/studentsAssociation.ts';

export class TestData {
    private modalities: Modality[];
    private studentsAssociations: StudentsAssociation[];

    constructor() {
        this.modalities = [
          new Modality('Futebol', Gender.MALE),
          new Modality('Voleibol', Gender.MALE),
          new Modality('Basquetebol', Gender.FEMALE),
          new Modality('Masculino', Gender.MALE)
        ];

        this.studentsAssociations = [
          new StudentsAssociation('aefeup', 'aefeup'),
          new StudentsAssociation('aefep', 'aefep'),
          new StudentsAssociation('aeisep', 'aeisep'),
          new StudentsAssociation('aefadeup', 'aefadeup')
        ];
    }

    public static getGames(): any {
        return [
            {
                team1: 0,
                team2: 1,
                score1: '3',
                score2: '0',
                local: 'Pavilhão Luís Falcão',
                modality: 0,
                date: '08/09/2016',
                time: '18:30'
            },
            {
                team1: 1,
                team2: 2,
                sets: [
                    {
                        score1: '25',
                        score2: '23'
                    },
                    {
                        score1: '26',
                        score2: '24'
                    },
                    {
                        score1: '25',
                        score2: '20'
                    }
                ],
                local: 'Pavilhão Luís Falcão',
                modality: 1,
                date: '11/09/2016',
                time: '18:30'
            },
            {
                team1: 2,
                team2: 3,
                score1: null,
                score2: null,
                local: 'Pavilhão Luís Falcão',
                modality: 2,
                date: '12/09/2016',
                time: '19:30'
            },
            {
                team1: 0,
                team2: 1,
                score1: null,
                score2: null,
                local: 'Pavilhão Luís Falcão',
                modality: 3,
                date: '11/09/2016',
                time: '18:30'
            }
        ];
    }
}
