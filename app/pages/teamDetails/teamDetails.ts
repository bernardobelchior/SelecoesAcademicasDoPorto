import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TestData} from '../../test/testData';

@Component({
  templateUrl: 'build/pages/teams/teamsDetails.html',
  providers: [TestData]
})
export class TeamDetailsPage {
  private players:string[];
  private teamName:string;
  private associationName: string;
  constructor(private navCtrl: NavController, private navParams: NavParams, private testData: TestData) {
    this.teamName=navParams.get('teamName');
    this.associationName=navParams.get('associationName');
    this.players=testData.getStudentsAssociationsByName(navParams.get('associationName')).getTeamByName(navParams.get('teamName')).getPlayers();;
  }
}
