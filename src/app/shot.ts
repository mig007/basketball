import { IStat } from './istat';
import { Player } from './player';

export interface IShot extends IStat {
    x:number,
    y:number,
    leftSide: boolean,
    distance?: number,
    make?: boolean,
    three: boolean
}

export class Shot implements IShot{
    
    x: number;    
    y: number;
    leftSide: boolean=true;
    distance?: number = 0;
    make?: boolean | undefined;
    three: boolean=false;
    playerID?: number | undefined;
    player?:Player | undefined;
    gmaeID?: number | undefined;
    date: Date = new Date();
    gameTime: number = 0;
    period: number = 1;
    toString(): string {
       return `${Math.round(this.distance || 0)}' ${this.three ? '3PT' : '2PT'} ${(this.make === undefined ? 'attempt' : this.make ? 'made' : 'missed')} by ${this.player ? this.player.getName() : 'Unkown'}`;
    }

    constructor(x?:number, y?:number)
    {
        this.x = x || 0;
        this.y = y || 0;
        
        
    }
    
}
