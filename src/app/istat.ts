import { IGameLog } from './igame-log';
import { Player } from './player';

export interface IStat extends IGameLog {
    player?:Player;
    playerID?:number;
}
