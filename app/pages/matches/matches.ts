import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {TestData} from '../../test/testData';

@Component({
    templateUrl: 'build/pages/matches/matches.html',
    providers: [TestData]
})
export class MatchesPage {
    private games;
    private data;
    private lastMatches;
    private nextMatches;
    private getGames;
    start: boolean = false;

    constructor(public viewCtrl: ViewController, private navCtrl: NavController, private testData: TestData) {
        this.lastMatches = [];
        this.nextMatches = [];
        this.getGames = testData.getStudensAssociations();
    }

    public loadGames() {
        this.data = TestData.getGames();
        this.divideData();
    }

    public divideData() {

        for (let item of this.data) {
            console.log(item.date.valueOf()); console.log(new Date().valueOf());
            if (item.date.valueOf() < (new Date()).valueOf())
                this.lastMatches.push(item);
            else this.nextMatches.push(item);

        }
    }

    ionViewWillEnter() {
        console.log(new Date());
        if (!this.start) this.loadGames();
        this.start = true;
        console.log(this.nextMatches);
        console.log(this.lastMatches);
    }

}
