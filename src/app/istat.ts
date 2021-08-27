export interface IStat {
    playerID?:number;
    gmaeID?:number;
    date:Date;
    gameTime:number;
    quarter:number;
    toString():string;
}
