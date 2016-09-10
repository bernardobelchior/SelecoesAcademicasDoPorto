import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {TestData} from '../../test/testData';
import {MatchDetailsPage} from '../matchesDetails/matchesDetails';

@Component({
<<<<<<< HEAD
    templateUrl: 'build/pages/matches/matches.html',
    providers: [TestData]
=======
    templateUrl: 'build/pages/matches/matches.html'
>>>>>>> master
})
export class MatchesPage {
    private games;
    private data;
    private lastMatches;
    private nextMatches;
    private getGames;
<<<<<<< HEAD
    start: boolean = false;

    constructor(public viewCtrl: ViewController, private navCtrl: NavController, private testData: TestData) {
        this.lastMatches = [];
        this.nextMatches = [];
        this.getGames = testData.getStudensAssociations();
=======

    constructor(public viewCtrl: ViewController, private navCtrl: NavController) {
        this.lastMatches = [];
        this.nextMatches = [];
        this.getGames = TestData.getStudentsAssociations();
>>>>>>> master
    }

    public loadGames() {
        this.data = TestData.getGames();
        this.divideData();
    }

    public divideData() {
<<<<<<< HEAD

=======
>>>>>>> master
        for (let item of this.data) {
            console.log(item.date.valueOf()); console.log(new Date().valueOf());
            if (item.date.valueOf() < (new Date()).valueOf())
                this.lastMatches.push(item);
            else this.nextMatches.push(item);
<<<<<<< HEAD

        }
    }

    public openLastMatchDetails(lastMatch: any){
      console.log('entrei');
      this.navCtrl.push(MatchDetailsPage, {
        match: lastMatch
      });
    }

    public openNextMatchDetails(nextMatch: any){
      console.log('entrei');
      this.navCtrl.push(MatchDetailsPage, {
        match: nextMatch
      });
    }


    ionViewWillEnter() {
        console.log(new Date());
        if (!this.start) this.loadGames();
        this.start = true;
        console.log(this.nextMatches);
        console.log(this.lastMatches);
    }

=======
        }
    }

    ionViewWillEnter() {
        this.loadGames();
    }
>>>>>>> master
}
