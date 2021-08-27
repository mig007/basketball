import { Injectable } from '@angular/core';
import { IShot } from './shot';
import { Coord } from './coord';
import { Observable, of } from 'rxjs';
import { GameLogService } from './game-log.service';

@Injectable({
  providedIn: 'root'
})
export class ShotService {

  
  constructor(private log:GameLogService) { }
  private shots:IShot[] = [];
  leftBasket:Coord = {x: 5.25, y:25};
  rightBasket:Coord = {x: 78.75, y:25};

  getShots():Observable<IShot[]>{
    return of(this.shots);
  }
  addShot(shot:IShot){
    shot.distance = this.getShotDistance(shot);
    this.shots.push(shot);
    this.log.add(shot);

  }
  removeShot(shot:IShot){
    
    let idx = this.shots.indexOf(shot);
    if(idx >= 0)
      this.shots.splice(idx, 1);

    this.log.remove(shot);
  
  }

  getShotDistance(shot:IShot):number{
    let basket = (shot.leftSide ? this.leftBasket : this.rightBasket);
    return this.getDistance(shot.x, shot.y, basket.x, basket.y);
  }
  private getDistance(x1:number,y1:number,x2:number,y2:number):number{
    return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))
  }
}
