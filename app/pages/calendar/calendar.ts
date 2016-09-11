import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Event} from  '../../class/event.ts';
import {TestData} from '../../test/testData.ts';

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
    private feature: string;

    constructor(private navController: NavController) {
        this.date = new Date();
        this.selectedDay = this.date.getDate();
        console.log("ss " + this.selectedDay);

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
        console.log("fdfd " + this.days[1][6].getDay());
    }

    nextMonth(n:number) {

        this.date.setMonth(this.date.getMonth() + 1);
        this.date.setDate(n);
        this.initDaysOfTheMonth();
    }

    monthBefore(n:number) {

        this.date.setMonth(this.date.getMonth() - 1);
        this.date.setDate(n);
        this.initDaysOfTheMonth();
    }

    clicked(event: Event, n: number) {
      console.log("d "+ event.getDay());
        if (event.getCurrentMonth()) {
            this.selectedDay = event.getDay();
            //  this.featuresInADay();
        }
        else if (n == 0) {
            this.monthBefore(event.getDay());
        }
        else if (n == 4 || n == 5) {
            this.nextMonth(event.getDay());
        }
    }

    hasEvent(day: number): boolean {
        let selectedDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.selectedDay);

        for (let game of TestData.getGames()) {
            if (game.date.valueOf() == selectedDate.valueOf())
                return true;
        }

        return false;
    }

    /*getEventsInDay(day: number) : Event[] {

    }*/

    /*featuresInADay() {
        let d: Date = new Date(this.date.getFullYear(), this.date.getMonth(), this.day);
        console.log("d " + d);
        for (let i = 0; i < TestData.getGames().length; i++) {
            console.log(TestData.getGames()[i].date);
            if (TestData.getGames()[i].date.valueOf() == d.valueOf()) {
                this.feature = TestData.getStudentsAssociations()[TestData.getGames()[i].team1].getFullName() + " " +
                    TestData.getStudentsAssociations()[TestData.getGames()[i].team2].getFullName() + '\n' +
                    " In " + TestData.getGames()[i].local + " at " + TestData.getGames()[i].time;
                console.log("Entrei");
                return;
            }
        }
        console.log("Estou a sair");
        this.feature = " No games in this day";

    }*/
}
