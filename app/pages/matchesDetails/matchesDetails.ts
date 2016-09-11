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
    private playersTeam1;
    private playersTeam2;

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.match = navParams.get('match');
        this.teams = TestData.getStudentsAssociations();
        this.populateTeams();
    }

    populateTeams(){
      this.playersTeam1=this.match.getFirstTeam().getTeamByModality(this.match.getModality()).getPlayers();
      this.playersTeam2=this.match.getSecondTeam().getTeamByModality(this.match.getModality()).getPlayers();
    }
}
