export interface IGameClock {
    period:number;
    time:number;
    length:number;
    isRuning: boolean;
}
export class GameClock implements IGameClock {
    isRuning: boolean = false;
    period: number;  
    time: number = 0;
    length: number; //in minutes
    constructor(period:number, lengthInMin:number){
        this.period = period;
        this.length = lengthInMin;
        this.time = lengthInMin * 60 * 1000;
    }
    public getMinutesCommponent():number{
        //get the whole minutes
        return Math.floor(this.time / (60 * 1000));
    }
    public getSecondsComponent():number{
        //mod out the mintues, turn the seconds into 10ths
        let tenths = (this.time % (60 * 1000)) / 100;
        return Math.round(tenths)/10;
    }
    public getTimeLabel():string{
        let seconds = this.getSecondsComponent();
        let minutes = this.getMinutesCommponent();
        if(this.time == 0)
            return "0:00";
        return   minutes + ":" 
             + (seconds < 10 ? '0' : '') //add leading 0 when seconds are < 10
             + (minutes < 1 ? seconds + (seconds % 1 == 0 ? '.0' : '') : Math.floor(seconds)); //add tenths when less than 1 min left
    }
    setClock(min:number, sec:number){
        this.time = (min * 60 * 1000) + (sec * 1000);
    }
}
