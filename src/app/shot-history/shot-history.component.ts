import { Component, OnInit, Input } from '@angular/core';
import { Shot } from '../shot';
import { ShotService } from '../shot.service';

@Component({
  selector: 'app-shot-history',
  templateUrl: './shot-history.component.html',
  styleUrls: ['./shot-history.component.less']
})
export class ShotHistoryComponent implements OnInit {

  shots!: Shot[];
  constructor(private shotService:ShotService) { }

  ngOnInit(): void {
    this.shotService.getShots().subscribe(x => this.shots = x);
  }
 
  remove(shot:Shot){
    this.shotService.removeShot(shot);
  }
}
