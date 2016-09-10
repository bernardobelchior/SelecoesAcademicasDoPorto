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
        console.log(this.studentsAssociations);
        console.log(this.modality);

        /*  for (var i=0; i < testData.getStudentsAssociations().length; i++){
            for(var j=0; j < testData.getStudentsAssociations()[i].getTeams().length; j++){
              if(testData.getStudentsAssociations()[i].getTeams()[j]==this.modality.getSport()){
                this.studentsAssociations.push(testData.getStudentsAssociations()[i].getShortName());
              }
            }
          }*/

    }

    public openTeamPage(team: Team) {
        this.navCtrl.push(TeamDetailsPage, {
            teamName: this.modality.getSport(), associationName: team
        });
    }
}
