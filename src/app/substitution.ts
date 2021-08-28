import { IGameLog } from './igame-log';
import { PeriodType } from './period-type';
import { Player } from './player';

export class Substitution implements IGameLog {
    gmaeID?: number | undefined;    
    date: Date;
    gameTime: number;
    period: number;
    periodType: PeriodType;
    playerIn:Player;
    playerOut?:Player;
    toString(): string {
        if(this.playerOut)
            return `${this.playerIn.getName()} replaces ${this.playerOut.getName()}`;
         else
            return `${this.playerIn.getName()} starting`;
    }
    constructor(gameTime: number, period:number, periodType:PeriodType, playerIn:Player, playerOut?:Player){
        this.gameTime = gameTime;
        this.period = period;
        this.date = new Date();
        this.periodType = periodType;
        this.playerIn = playerIn;
        this.playerOut = playerOut;
    }
}
