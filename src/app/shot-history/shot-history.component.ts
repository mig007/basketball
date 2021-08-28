import { Component, OnInit, Input } from '@angular/core';
import { Shot } from '../shot';
import { ShotService } from '../shot.service';
import { ShotType, SHOT_TYPE } from '../shot-type';
import { GameService } from '../game.service';

@Component({
  selector: 'app-shot-history',
  templateUrl: './shot-history.component.html',
  styleUrls: ['./shot-history.component.less']
})
export class ShotHistoryComponent implements OnInit {

  shots!: Shot[];
  shotTypes: ShotType[] = [];
  constructor(private shotService:ShotService, private gameService:GameService) { }

  ngOnInit(): void {
    this.shotService.getShots().subscribe(x => this.shots = x);
    for (const [key, value] of Object.entries(SHOT_TYPE)) {
      this.shotTypes.push(value);
    }

  }
 
  remove(shot:Shot){
    this.shotService.removeShot(shot);
  }
  finalizeShot(shot:Shot, make:boolean)
  {
    shot.make = make;
    if(make)
      this.gameService.game.ball = undefined;
  }
}
