import { PeriodType } from './period-type';
import { GameClock } from './game-clock';


export interface IGameLog {
    gmaeID?:number;
    date:Date;
    gameTime:number;
    period:number;
    periodType:PeriodType;
    toString():string;
}
export class GameLog implements IGameLog {
    gmaeID?: number | undefined;   
     date: Date;
    gameTime: number;
    period: number;
    periodType: PeriodType;
    note:string
    toString(): string {
        return this.note;
    }
    constructor(clock:GameClock, note:string)
    {
        this.gameTime = clock.time;
        this.period = clock.period;
        this.periodType = clock.periodType;
        this.note = note;
        this.date = new Date();
    }
    
}
