import { IStat } from './istat';

export interface IFieldGoal extends IStat {
    x:number,
    y:number,
    leftSide: boolean,
    distance?: number,
    make?: boolean,
    three: boolean
}

export class FieldGoal implements IFieldGoal{
    
    x: number;    
    y: number;
    leftSide: boolean=true;
    distance?: number;
    make?: boolean | undefined;
    three: boolean=false;
    playerID?: number | undefined;
    gmaeID?: number | undefined;
    date: Date = new Date();
    gameTime: number = 0;
    quarter: number = 1;
    toString(): string {
       return `${this.three ? '3PT' : '2PT'} ${(this.make ? 'made' : 'missed')}`;
    }

    constructor(x?:number, y?:number)
    {
        this.x = x || 0;
        this.y = y || 0;
        
        
    }
    
}
