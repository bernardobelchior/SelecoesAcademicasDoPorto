import {Component} from '@angular/core';
import {NavController, NavParams, NavOptions} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {StudentsAssociation} from '../../class/studentsAssociation.ts';
import {Modality} from '../../class/modality.ts';
import {Team} from '../../class/team.ts';
import {TeamDetailsPage} from '../teamDetails/teamDetails';


@Component({
    templateUrl: 'build/pages/modalitiesPage/modalitiesPage.html'
})
export class ModalitiesPage {
    private modality: Modality;
    private studentsAssociations: StudentsAssociation[];

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.modality = TestData.getModalityById(navParams.get('id'));
        this.studentsAssociations = TestData.getStudentsAssociationsWithModality(this.modality);
    }

    public openTeamPage(association: StudentsAssociation) {
        this.navCtrl.push(TeamDetailsPage, {
            team: association.getTeamByModality(this.modality), association: association
        });
    }
}
