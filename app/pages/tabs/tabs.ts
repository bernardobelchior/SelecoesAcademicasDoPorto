import {Component} from '@angular/core';
import {MatchesPage} from '../matches/matches';
import {CalendarPage} from '../calendar/calendar';
import {TeamsPage} from '../teams/teams';
import {OptionsPage} from '../options/options';

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
    private tab1Root: any;
    private tab2Root: any;
    private tab3Root: any;
    private tab4Root: any;

    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = MatchesPage;
        this.tab2Root = CalendarPage;
        this.tab3Root = TeamsPage;
        this.tab4Root = OptionsPage;
    }
}
