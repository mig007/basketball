import { IStat } from './istat';
import { Player } from './player';
import { PeriodType } from './period-type';
import { ShotType, SHOT_TYPE } from './shot-type';

export interface IShot extends IStat {
    x:number,
    y:number,
    leftSide: boolean,
    distance?: number,
    make?: boolean,
    type: ShotType
}

export class Shot implements IShot{
    
    
    x: number;    
    y: number;
    leftSide: boolean=true;
    distance?: number = 0;
    make?: boolean | undefined;
    type: ShotType;
    playerID?: number | undefined;
    player:Player;
    gmaeID?: number | undefined;
    date: Date = new Date();
    gameTime: number;
    period: number;
    periodType: PeriodType; 
    toString(): string {
       
       return (this.type == SHOT_TYPE.FT ? "" : Math.round(this.distance || 0) + '\' ' ) +  `${this.type.short} ${(this.make === undefined ? 'attempt' : this.make ? 'made' : 'missed')} by ${this.player ? this.player.getName() : 'Unkown'}`;
    }

    constructor(player:Player, x:number, y:number, type:ShotType, gameTime: number, period:number, periodType:PeriodType)
    {
        this.x = x || 0;
        this.y = y || 0;
        this.gameTime = gameTime;
        this.period = period;
        this.periodType =  periodType;
        this.type = type;
        this.player = player;
        
        
    }
    
}
