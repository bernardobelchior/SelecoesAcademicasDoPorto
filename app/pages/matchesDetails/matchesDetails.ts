import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TestData} from '../../test/testData';

@Component({
  templateUrl: 'build/pages/teams/teamsDetails.html',
  providers: [TestData]
})
export class MatchDetailsPage {
  private match: any;
  private teams;

  constructor(private navCtrl: NavController, private navParams: NavParams, private testData: TestData) {
    this.match=navParams.get('match');
    this.teams = testData.getStudensAssociations();

  }
}
