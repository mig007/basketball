import { Injectable } from '@angular/core';
import { IShot, Shot } from './shot';
import { Coord } from './coord';
import { Observable, of } from 'rxjs';
import { GameLogService } from './game-log.service';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class ShotService {
  
  

  
  constructor(private log:GameLogService, private gameService:GameService) { }
  private shots:IShot[] = [];
  leftBasket:Coord = {x: 5.25, y:25};
  rightBasket:Coord = {x: 78.75, y:25};
  homeScore:number = 0;
  awayScore:number = 0;

  getShots():Observable<IShot[]>{
    return of(this.shots);
  }
  addShot(shot:IShot){
    shot.distance = this.getShotDistance(shot);
    this.shots.push(shot);
    this.log.add(shot);
  }
  finalizeShot(shot:Shot, make: boolean) {
    
    shot.make = make;
    //clear the ball for a rebouond/inbound;
    this.gameService.game.ball = undefined;

    if(shot.make)
    {
      
      if(this.gameService.isHomeTeam(shot.player))
        this.homeScore += shot.type.value;
      else
        this.awayScore += shot.type.value;
        
    }
  }
  refreshScore(){
    
    this.homeScore = 0;
    this.awayScore = 0;
    this.shots.forEach(shot => {
      if(shot.make)
      {
        if(this.gameService.isHomeTeam(shot.player))
          this.homeScore += shot.type.value;
        else
          this.awayScore += shot.type.value;
      }
    });
    
  }
  

  removeShot(shot:IShot){
    
    let idx = this.shots.indexOf(shot);
    if(idx >= 0)
    {
      this.shots.splice(idx, 1);
      this.log.remove(shot);
      if(this.gameService.isHomeTeam(shot.player))
        this.homeScore -= shot.type.value;
      else
        this.awayScore -= shot.type.value;
    }
    
  }

  
  getShotDistance(shot:IShot):number{
    let basket = (shot.leftSide ? this.leftBasket : this.rightBasket);
    return this.getDistance(shot.x, shot.y, basket.x, basket.y);
  }
  private getDistance(x1:number,y1:number,x2:number,y2:number):number{
    return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))
  }
}
