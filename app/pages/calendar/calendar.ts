import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Event} from  '../../class/event.ts';
import {TestData} from '../../test/testData.ts';
import {Match} from '../../class/match/match.ts';
import {MatchDetailsPage} from '../matchesDetails/matchesDetails';

@Component({
    templateUrl: 'build/pages/calendar/calendar.html'
})
export class CalendarPage {
    private date: Date;
    private daysInPreviousMonth: number;
    private daysInTheAtualMonth: number;
    private atualMonthDays: number;
    private days: Event[][];
    private selectedDay: number;
    private features: Match[];
    private matches: Match[];

    constructor(private navController: NavController) {
        this.date = new Date();
        this.selectedDay = this.date.getDate();

        this.initDaysOfTheMonth();
    }

    initDaysOfTheMonth() {

        this.selectedDay = this.date.getDate();
        this.date.setDate(1);
        this.date.getDay();
        this.daysInPreviousMonth = (new Date(this.date.getFullYear(), this.date.getMonth() - 1, 0)).getDate();
        this.daysInTheAtualMonth = (new Date(this.date.getFullYear(), this.date.getMonth(), 0)).getDate();
        this.days = [];

        let counter: number = 0;
        let event: Event;
        this.days[counter] = [];
        for (let i = this.date.getDay() - 1; i >= 0; i--) {
            event = new Event(this.daysInPreviousMonth - i, false);
            this.days[0][counter] = event;
            counter++;
        }

        let day: number = 1;
        for (let i = counter; i < 7; i++) {
            event = new Event(day, true);
            this.days[0][i] = event;
            day++;
        }

        let thisMonth: boolean = true;
        for (let i = 1; i < 7; i++) {
            this.days[i] = [];
            for (let j = 0; j < 7; j++) {
                if (thisMonth)
                    event = new Event(day, true);
                else
                    event = new Event(day, false);
                this.days[i][j] = event;
                if (day < this.daysInTheAtualMonth)
                    day++;
                else {
                    day = 1;
                    thisMonth = false;
                }
            }
        }
    }

    nextMonth() {

        this.date.setMonth(this.date.getMonth() + 1);
        this.date.setDate(1);
        this.initDaysOfTheMonth();
    }

    monthBefore() {

        this.date.setDate(1);
        this.date.setDate(-1);
        this.date.setDate(1);
        this.initDaysOfTheMonth();
    }

    clicked(event: Event, n: number) {
        if (event.getCurrentMonth()) {
            this.selectedDay = event.getDay();
        }
        else if (n == 0) {
            this.monthBefore();
        }
        else if (n == 4 || n == 5) {
            this.nextMonth();
        }
    }

    private sameDay(firstDate: Date, secondDate: Date) {
        return (firstDate.getFullYear() === secondDate.getFullYear() &&
            firstDate.getMonth() === secondDate.getMonth() &&
            firstDate.getDate() === secondDate.getDate());
    }

    hasEvent(day: number): boolean {
        let selectedDate = new Date(this.date.getFullYear(), this.date.getMonth(), day);
        this.matches = [];
        for (let match of TestData.getMatches()) {
            if (this.sameDay(match.getDate(), selectedDate)) {
                this.matches.push(match);
            }
        }

        if (this.matches.length > 0) {
            this.matchesInADay();
            return true;
        }

        return false;
    }
    hasEventVeri(day: number, month: number): boolean {
        let selectedDate: Date;
        if (month == -1)
            selectedDate = new Date(this.date.getFullYear(), this.date.getMonth() - 1, day);
        else if (month == 0)
            selectedDate = new Date(this.date.getFullYear(), this.date.getMonth(), day);
        else if (month == 1)
            selectedDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, day);

        this.matches = [];
        for (let match of TestData.getMatches()) {
            if (this.sameDay(match.getDate(), selectedDate)) {
                return true;
            }
        }

        return false;
    }

    matchesInADay() {
        this.features = [];

        let i: number = 0;
        for (let match of this.matches) {
            this.features[i] = match;
            i++;
        }
    }

    public openMatchDetails(match: Match): void {
        this.navController.push(MatchDetailsPage, {
            match: match
        });
    }
}
