import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {StudentsAssociation} from '../../class/studentsAssociation';
import {Match} from '../../class/match/match';

@Component({
    templateUrl: 'build/pages/matchesDetails/matchesDetails.html'
})
export class MatchDetailsPage {
    private match: Match;
    private teams: StudentsAssociation[];

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.match = navParams.get('match');
        this.teams = TestData.getStudentsAssociations();
    }

    public isVolleyballMatch(): boolean {
        return typeof (<any>this.match).getSets === 'function';
    }
}
