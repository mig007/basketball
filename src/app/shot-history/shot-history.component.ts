import { Component, OnInit, Input } from '@angular/core';
import { FieldGoal } from '../field-goal';
import { ShotService } from '../shot.service';

@Component({
  selector: 'app-shot-history',
  templateUrl: './shot-history.component.html',
  styleUrls: ['./shot-history.component.less']
})
export class ShotHistoryComponent implements OnInit {

  shots!: FieldGoal[];
  constructor(private shotService:ShotService) { }

  ngOnInit(): void {
    this.shotService.getShots().subscribe(x => this.shots = x);
  }
 
  remove(shot:FieldGoal){
    this.shotService.removeShot(shot);
  }
}
