import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {Modality, Gender} from '../../class/modality';
import {StudentsAssociation} from '../../class/studentsAssociation.ts';
import {StudentAssociationDetailsPage} from '../studentAssociationDetails/studentAssociationDetails';
import {ModalitiesPage} from '../modalitiesPage/modalitiesPage';

@Component({
    templateUrl: 'build/pages/teams/teams.html',
    providers: [TestData]
})
export class TeamsPage {
    private modalities: Modality[];
    private studentAssociation: StudentsAssociation[];

    constructor(private navCtrl: NavController) {
        this.modalities = TestData.getModalities();
        this.studentAssociation = TestData.getStudentsAssociations();
        TestData.populateTeams();
    }

    public openStudentAssociationDetails(studentAssociation: StudentsAssociation) {
        this.navCtrl.push(StudentAssociationDetailsPage, {
            id: studentAssociation.getId()
        });

    }

    public openModalityDetails(modalities: Modality) {
        this.navCtrl.push(ModalitiesPage, {
            id: modalities.getId()
        });
    }

}
