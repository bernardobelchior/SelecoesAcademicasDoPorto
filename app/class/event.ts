export class Event {
    private existEvent: boolean;

    constructor(private day: number, private currentMonth: boolean){
      this.existEvent = false;
    }

    public setExistEvent(flag : boolean){
      this.existEvent = flag;
    }

    public getDay(){
      return this.day;
    }

    public getCurrentMonth(){
      return this.currentMonth;
    }
}
