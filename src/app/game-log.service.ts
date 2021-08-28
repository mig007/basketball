import { Injectable } from '@angular/core';
import { IGameLog, GameLog } from './igame-log';
import { Observable, of } from 'rxjs';
import { GameClock } from './game-clock';

@Injectable({
  providedIn: 'root'
})
export class GameLogService {
  logs:IGameLog[] = [];

  constructor() { }

  get():Observable<IGameLog[]>{
    return of(this.logs);
  }
  add(log:IGameLog){
    this.logs.push(log);
  }
  addNote(clock:GameClock, note:string){
    let log = new GameLog(clock, note);
    this.logs.push(log);
  }
  remove(log:IGameLog){
    let idx = this.logs.indexOf(log);
    if(idx !== -1)
      this.logs.splice(idx, 1);
  }

}
