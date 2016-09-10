import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {Team} from '../../class/team';
import {StudentsAssociation} from '../../class/studentsAssociation';

@Component({
    templateUrl: 'build/pages/teamDetails/teamDetails.html'
})
export class TeamDetailsPage {
    private players: string[];
    private team: Team;
    private association: StudentsAssociation;

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.team = navParams.get('team');
        this.association = navParams.get('association');
        //this.players = this.team.getPlayers();
        console.log(this.team);
        //console.log(this.players);
    }
}
