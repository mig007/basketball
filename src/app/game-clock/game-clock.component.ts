import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { GameClock } from '../game-clock';
import { PeriodType, PERIOD } from '../period-type';

@Component({
  selector: 'app-game-clock[clock]',
  templateUrl: './game-clock.component.html',
  styleUrls: ['./game-clock.component.less']
})
export class GameClockComponent implements OnInit {

  @Input() clock!:GameClock;
  constructor(public game:GameService) { }
  set:boolean = false;
  min:number = 0;
  sec:number = 0;
  periods:PeriodType[] = [];
  
  ngOnInit(): void {
    for (const [key, value] of Object.entries(PERIOD)) {
      this.periods.push(value);
    }
  }
  setClock(){
    this.clock.stopClock();
   
    this.min = this.game.clock.getMinutesCommponent();
    this.sec = this.game.clock.getSecondsComponent();
    this.set = true;
  }
  confirmSet(){
    this.clock.set(this.min, this.sec);
    this.set = false;
  }
  cancel(){
    this.set = false;
  }
}
