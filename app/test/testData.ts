import {Set} from 'typescript-collections';
import {Modality, Gender} from '../class/modality';
import {StudentsAssociation} from '../class/studentsAssociation.ts';

export class TestData {
    private static modalities: Modality[] = [
        new Modality('Futebol', Gender.MALE),
        new Modality('Voleibol', Gender.MALE),
        new Modality('Basquetebol', Gender.FEMALE),
        new Modality('Masculino', Gender.MALE)
    ];

    private static studentsAssociations: StudentsAssociation[] = [
        new StudentsAssociation('aefeup', 'aefeup'),
        new StudentsAssociation('aefep', 'aefep'),
        new StudentsAssociation('aeisep', 'aeisep'),
        new StudentsAssociation('aefadeup', 'aefadeup')
    ];;

    public getStudensAssociations(){
      return TestData.studentsAssociations;
    }
    public getModalities(){
      return TestData.modalities;
    }

    public getStudentsAssociationsByName(name: string){
      for(var i=0; i<TestData.studentsAssociations.length; i++){
        if(TestData.studentsAssociations[i].getShortName()==name){
          return TestData.studentsAssociations[i];
        }
      }
    }

    public getModalityById(id : number){

          return TestData.modalities[id];

    }

    public getStudentsAssociations(){
      return TestData.studentsAssociations;
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
                date: new Date(2016, 8, 6),
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
                date: new Date(2016, 9, 11),
                time: '18:30'
            },
            {
                team1: 2,
                team2: 3,
                score1: null,
                score2: null,
                local: 'Pavilhão Luís Falcão',
                modality: 2,
                date: new Date(2016, 9, 12),
                time: '19:30'
            },
            {
                team1: 0,
                team2: 1,
                score1: null,
                score2: null,
                local: 'Pavilhão Luís Falcão',
                modality: 3,
                date: new Date(2016, 9, 15),
                time: '18:30'
            }
        ];
    }
}
