import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {TestData} from '../../test/testData';
import {Match} from '../../class/match/match';

@Component({
    templateUrl: 'build/pages/matches/matches.html'
})
export class MatchesPage {
    private lastMatches : Match[];
    private nextMatches : Match[];

    constructor(public viewCtrl: ViewController, private navCtrl: NavController) {
        this.lastMatches = [];
        this.nextMatches = [];
    }

    public loadMatches() : void {
      let today : Date = new Date();

        for (let match of TestData.getMatches()) {
            if (match.getDate().valueOf() < today.valueOf())
                this.lastMatches.push(match);
            else
                this.nextMatches.push(match);
        }
    }

    ionViewWillEnter() {
        this.loadMatches();
    }
}
