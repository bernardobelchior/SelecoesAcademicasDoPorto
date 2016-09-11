import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Team} from '../../class/team';
import {StudentsAssociation} from '../../class/studentsAssociation';
import {FavoritesService} from '../../services/favorites';

@Component({
    templateUrl: 'build/pages/teamDetails/teamDetails.html'
})
export class TeamDetailsPage {
    private players: string[];
    private team: Team;
    private association: StudentsAssociation;
    private favoritesService: FavoritesService;

    private toggleFavorite;

    constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.team = navParams.get('team');
        this.association = navParams.get('association');
        this.players = this.team.getPlayers();
        this.favoritesService = FavoritesService.getInstance();
    }

    ionViewWillLeave() {
      this.favoritesService.saveFavorites();
    }
}
