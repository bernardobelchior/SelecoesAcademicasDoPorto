import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {StudentsAssociation} from '../../class/studentsAssociation.ts';
import {Team} from '../../class/team.ts';
import {TeamDetailsPage} from '../teamDetails/teamDetails';
import {FavoritesService, Favorite} from '../../services/favorites';


@Component({
    templateUrl: 'build/pages/studentAssociationDetails/studentAssociationDetails.html',
})
export class StudentAssociationDetailsPage {
    private studentAssociation: StudentsAssociation;
    private teams: Team[];

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.studentAssociation = TestData.getStudentsAssociations()[navParams.get('id')];
        this.teams = this.studentAssociation.getTeamsArray();
    }

    public openTeamPage(team: Team) {
        this.navCtrl.push(TeamDetailsPage, {
            team: team,
            association: this.studentAssociation
        });
    }

  /*  public favoriteAssociation() {
      studentsAssociation.getTeams().forEach(function(team: Team) {
        FavoritesService.getInstance().addFavorite(new Favorite(this.studentsAssociation, team.getModality()));
      });
    }

    public unfavoriteAssociation() {
      studentsAssociation.getTeams().forEach(function(team: Team) {
        FavoritesService.getInstance().removeFavorite(new Favorite(studentsAssociation, team.getModality()));
      });
    }*/
}
