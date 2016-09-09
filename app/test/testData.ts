export class TestData {
    public static getGames() : any {
      return [
        {
          team1 : 'aefeup',
          team2: 'aefep',
          score1: '3',
          score2: '0',
          local: 'Pavilhão Luís Falcão',
          modality: 'Futebol Masculino',
          date: '08/09/2016',
          time: '18:30'
        },
        {
          team1 : 'aefep',
          team2: 'aeisep',
          sets: [
            {
              score1 : '25',
              score2 : '23'
            },
            {
              score1 : '26',
              score2 : '24'
            },
            {
              score1 : '25',
              score2 : '20'
            }
          ],
          local: 'Pavilhão Luís Falcão',
          modality: 'Voleibol Masculino',
          date: '11/09/2016',
          time: '18:30'
        },
        {
          team1 : 'aefeup',
          team2: 'aefadeup',
          score1: null,
          score2: null,
          local: 'Pavilhão Luís Falcão',
          modality: 'Basquetebol Feminino',
          date: '12/09/2016',
          time: '19:30'
        },
        {
          team1 : 'aefeup',
          team2: 'aefep',
          score1: null,
          score2: null,
          local: 'Pavilhão Luís Falcão',
          modality: 'Andebol Masculino',
          date: '11/09/2016',
          time: '18:30'
        }
      ];
    }
}
