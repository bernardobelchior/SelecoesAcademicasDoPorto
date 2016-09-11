import {Component} from '@angular/core';
import {NavController, Tabs} from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {Match} from '../../class/match/match';
import {FavoritesService} from '../../services/favorites';
import {MatchDetailsPage} from '../matchesDetails/matchesDetails';
import {TeamsPage}from '../teams/teams';

@Component({
    templateUrl: 'build/pages/matches/matches.html'
})
export class MatchesPage {
    private lastMatches: Match[];
    private nextMatches: Match[];
    private favorites: FavoritesService;

    private start: boolean = false;

    constructor(public viewCtrl: ViewController, private navCtrl: NavController) {
        this.lastMatches = [];
        this.nextMatches = [];
        this.favorites = FavoritesService.getInstance();
    }

    public loadMatches(): void {
        let today: Date = new Date();
        this.lastMatches = [];
        this.nextMatches = [];

        // FIXME: What if the match is still running?
        for (let match of TestData.getMatches()) {
            if (this.favorites.isFavorited(match.getFirstTeam(), match.getModality()) || this.favorites.isFavorited(match.getSecondTeam(), match.getModality())) {
                if (match.getDate().valueOf() < today.valueOf())
                    this.lastMatches.push(match);
                else
                    this.nextMatches.push(match);
            }
        }
    }

    public openMatchDetails(match: Match): void {
        this.navCtrl.push(MatchDetailsPage, {
            match: match
        });
    }

    public openTeamsTab(): void {
        // FIXME: Tab does not go to root, instead it goes to the last tab.
        (<Tabs>this.navCtrl.parent).select(2);
        //  this.navCtrl.popToRoot();
        //this.navCtrl.push(TeamsPage);
    }

    ionViewWillEnter(): void {
        if (!this.start || this.favorites.getFavoritesChanged())
            this.loadMatches();
        this.start = true;
    }
}
