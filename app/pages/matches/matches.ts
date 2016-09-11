import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ViewController} from 'ionic-angular';
import {TestData} from '../../test/testData';
import {Match} from '../../class/match/match';
import {MatchDetailsPage} from '../matchesDetails/matchesDetails';

@Component({
    templateUrl: 'build/pages/matches/matches.html'
})
export class MatchesPage {
    private lastMatches: Match[];
    private nextMatches: Match[];

    private start: boolean = false;

    constructor(public viewCtrl: ViewController, private navCtrl: NavController) {
        this.lastMatches = [];
        this.nextMatches = [];
    }

    public loadMatches(): void {
        let today: Date = new Date();

        for (let match of TestData.getMatches()) {
            if (match.getDate().valueOf() < today.valueOf())
                this.lastMatches.push(match);
            else
                this.nextMatches.push(match);
        }
    }

    public openMatchDetails(match: Match): void {
        this.navCtrl.push(MatchDetailsPage, {
            match: match
        });
    }

    ionViewWillEnter(): void {
        if (!this.start)
            this.loadMatches();
        this.start = true;
    }
}
