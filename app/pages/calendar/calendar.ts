import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Event} from  '../../class/event.ts';

@Component({
    templateUrl: 'build/pages/calendar/calendar.html'
})
export class CalendarPage {
    private date: Date;
    private daysInPreviousMonth: number;
    private daysInTheAtualMonth: number;
    private atualMonthDays: number;
    private days: Event[][];
    private click: boolean;
    private day: number;

    constructor(private navController: NavController) {
        this.date = new Date();
        this.click = false;

        this.initDaysOffTheMonth();

    }

    initDaysOffTheMonth() {

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

        let day : number = 1;
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
        this.initDaysOffTheMonth();
    }

    monthBefore() {
        this.date.setMonth(this.date.getMonth() - 1);
        this.initDaysOffTheMonth();
    }

    clicked(event: Event){
      if(event.getCurrentMonth){
      this.click = true;
      this.day = event.getDay();
      }
    }

    featuresInADay(){
      
    }
}
