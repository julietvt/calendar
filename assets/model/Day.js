'use strict';
class Day{
    constructor(date) {
        this._date = date;
        this._isCurrent = Day.isCurrent;
    }
    get date(){
        return this._date;
    }
    set date(value){
        this._date = value;
        this._isCurrent = Day.isCurrent(value);
    }
    get isCurrent(){
        return this._isCurrent;
    }
    static isCurrent(date){
        return date.toDateString() === Day.currentDate.toDateString();
    }
    static currentDate = new Date();
}

export default Day;