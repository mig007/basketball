import { Player } from './player';

export interface ITeam {
    name:string;
    players:Player[]
}
export class Team implements ITeam {
    name: string;    
    players: Player[] = [];
    constructor(name:string){
        this.name = name;
    }
}