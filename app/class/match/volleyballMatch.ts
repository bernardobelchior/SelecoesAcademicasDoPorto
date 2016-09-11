import {Match} from './match';
import {Team} from '../team';
import {Modality} from '../modality';
import {StudentsAssociation} from '../studentsAssociation';

export class VolleyballMatch extends Match {
    constructor(firstTeam: StudentsAssociation, secondTeam: StudentsAssociation,
        private firstSets: number[], private secondSets: number[],
        local: string, modality: Modality, date: Date) {

        super(firstTeam, secondTeam, VolleyballMatch.getScores(firstSets, secondSets)[0],
            VolleyballMatch.getScores(firstSets, secondSets)[1], local, modality, date);
    }

    private static getScores(firstSets: number[], secondSets: number[]): number[] {
        let scores: number[] = [0, 0];

        for (let i = 0; i < firstSets.length; i++) {
            if (firstSets[i] > secondSets[i])
                scores[0]++;
            else
                scores[1]++;
        }

        return scores;
    }

    public getSets(): number[][] {
        let sets: number[][] = [];
        for (let i = 0; i < this.firstSets.length; i++) {
            sets.push([this.firstSets[i], this.secondSets[i]]);
        }
        
        return sets;
    }
}
