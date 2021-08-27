import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players:Player[] = [];
  constructor() 
  { 
    this.add(45, "Packer", "Marshall")
  }
  add(number:number, last?:string, first?:string){
    let player = new Player(number, last, first);
    this.players.push(player);
  }
}
