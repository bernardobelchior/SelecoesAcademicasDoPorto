import {Component} from '@angular/core';
import {NavController, NavParams, NavOptions} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {StudentsAssociation} from '../../class/studentsAssociation.ts';
import {Team} from '../../class/team.ts';
import {TeamDetailsPage} from '../teamDetails/teamDetails';
import {Modality} from '../../class/modality';


@Component({
    templateUrl: 'build/pages/studentAssociationDetails/studentAssociationDetails.html',
    providers: [TestData]
})
export class StudentAssociationDetailsPage {
    private studentAssociation: StudentsAssociation;
    private teams: Set<Team>;
    private modalities: Modality[];

    constructor(private navCtrl: NavController, private navParams: NavParams, private testData: TestData) {
        this.studentAssociation = testData.getStudentsAssociations()[navParams.get('id')];
        this.teams = this.studentAssociation.getTeams();
        this.modalities = [];

        let modalities: Modality[] = this.modalities;
        this.teams.forEach(function(team) {
            modalities.push(team.getModality());
        });

        console.log(modalities);
    }

    public openTeamPage(team: Team) {
        this.navCtrl.push(TeamDetailsPage, {
            teamName: this.studentAssociation.getTeamByName(team.getModalityName()), associationName: this.studentAssociation.getShortName()
        });
    }


}
