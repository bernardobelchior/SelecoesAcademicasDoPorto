import {Component} from '@angular/core';
import {NavController, NavParams, NavOptions} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {StudentsAssociation} from '../../class/studentsAssociation.ts';
import {Team} from '../../class/team.ts';
import {TeamDetailsPage} from '../teamDetails/teamDetails';


@Component({
    templateUrl: 'build/pages/studentAssociationDetails/studentAssociationDetails.html',
    providers: [TestData]
})
export class StudentAssociationDetailsPage {
    private studentAssociation: StudentsAssociation;
    private modalities: string[];

    constructor(private navCtrl: NavController, private navParams: NavParams, private testData: TestData) {
        this.studentAssociation = testData.getStudentsAssociationsByName(navParams.get('name'));
        this.modalities = this.studentAssociation.getTeams();

    }



    public openTeamPage(team: Team) {
        this.navCtrl.push(TeamDetailsPage, {
            teamName: this.studentAssociation.getTeamByName(team.getModalityName()), associationName: this.studentAssociation.getShortName()
        });
    }


}
