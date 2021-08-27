export interface ICoord {
    x:number;
    y:number;
}
export class Coord implements ICoord {
    x:number;
    y:number;
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
}

