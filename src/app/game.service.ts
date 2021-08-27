import { Injectable } from '@angular/core';
import { Game } from './game';
import { Team } from './team';
import { GameClock } from './game-clock';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  isReady:boolean = false;
  game!:Game;
  clock!:GameClock;
  constructor() {}
   init(home:Team,away:Team, lengthInMin:number){
     if(!this.isReady)
     {
      this.game = new Game(home,away);
      this.clock = new GameClock(1, lengthInMin);
      this.isReady = true;
     }
   }
   private timer:any = null;
   startClock(){
    if(!this.timer)
    {
      this.clock.isRuning = true;
      this.timer = setInterval(() => {
        this.clock.time -= 100;
        //if the clock expires stop it and set to 0;
        if(this.clock.time <= 0)
        {
          this.clock.time = 0;
          this.stopClock();
        }
      }, 100)
      
    }
   }
   stopClock(){
    if(this.timer)
    {
      clearInterval(this.timer);
      this.timer = null;
      this.clock.isRuning = false;
    }
   }
   
   
  

}
