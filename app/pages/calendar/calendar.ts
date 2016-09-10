import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/calendar/calendar.html'
})
export class CalendarPage {
    private date: Date;
    private daysInPreviousMonth: number;
    private daysInTheAtualMonth: number;
    private atualMonthDays: number;
    private previousMonthDays: number[];
    private restOfTheDays: number[][];

    constructor(private navController: NavController) {
        console.log("Entrei");
        this.date = new Date();

        this.initDaysOffTheMonth();

    }

    initDaysOffTheMonth(){

      this.date.setDate(1);
      this.date.getDay();
      this.daysInPreviousMonth = (new Date(this.date.getFullYear(), this.date.getMonth() - 1, 0)).getDate();
      this.daysInTheAtualMonth = (new Date(this.date.getFullYear(), this.date.getMonth(), 0)).getDate();
      console.log(this.date.getMonth);
      this.previousMonthDays = [];
      this.restOfTheDays = [];

      let counter : number = 0;
      this.restOfTheDays[counter] = [];
      for (let i = this.date.getDay() - 1; i >= 0; i--) {
          this.restOfTheDays[0][counter] = this.daysInPreviousMonth - i;
          counter++;
      }

      let day = 1;
      for (let i = this.date.getDay(); i < 7; i++) {
          this.restOfTheDays[0][i] = day;
          day++;
      }

      for (let i = 1; i < 7; i++) {
          this.restOfTheDays[i] = [];
          for (let j = 0; j < 7; j++) {
              this.restOfTheDays[i][j] = day;
              if (day < this.daysInTheAtualMonth)
                  day++;
              else
                  day = 1;
          }
      }

    }

    nextMonth(){
      this.date.setMonth(this.date.getMonth()+1);
      this.initDaysOffTheMonth();
      console.log("Carregaram no botão");
      }

    monthBefore(){
      console.log("Carregaram no botão");
        this.date.setMonth(this.date.getMonth()-1);
        this.initDaysOffTheMonth();
    }
}
