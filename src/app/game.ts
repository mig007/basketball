import { Team } from './team';
import { IGameLog } from './igame-log';
import { Player } from './player';

export interface IGame {
    home:Team;
    away:Team;
    homePosession:boolean;
    log:IGameLog[];
    ball?:Player;
    homeActive:Player[];
    awayActive:Player[];
}
export class Game implements IGame {
    homeActive:Player[] = [];
    awayActive:Player[]  = [];
    ball?: Player;
    home: Team;    
    away: Team;
    homePosession: boolean = true;
    log: IGameLog[] = [];
    

    constructor(home:Team, away:Team){
        this.home = home;
        this.away = away;
        

    }
    

    
}
