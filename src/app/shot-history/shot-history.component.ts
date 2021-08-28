import { Component, OnInit, Input } from '@angular/core';
import { Shot } from '../shot';
import { ShotService } from '../shot.service';
import { ShotType, SHOT_TYPE } from '../shot-type';

@Component({
  selector: 'app-shot-history',
  templateUrl: './shot-history.component.html',
  styleUrls: ['./shot-history.component.less']
})
export class ShotHistoryComponent implements OnInit {

  shots!: Shot[];
  shotTypes: ShotType[] = [];
  constructor(private shotService:ShotService) { }

  ngOnInit(): void {
    this.shotService.getShots().subscribe(x => this.shots = x);
    for (const [key, value] of Object.entries(SHOT_TYPE)) {
      this.shotTypes.push(value);
    }

  }
 
  remove(shot:Shot){
    this.shotService.removeShot(shot);
  }
}
