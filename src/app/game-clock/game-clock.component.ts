import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { GameClock } from '../game-clock';
import { PeriodType, PERIOD } from '../period-type';
import { GameLogService } from '../game-log.service';
import { OrdinalPipe } from '../ordinal.pipe';

@Component({
  selector: 'app-game-clock[clock]',
  templateUrl: './game-clock.component.html',
  styleUrls: ['./game-clock.component.less']
})
export class GameClockComponent implements OnInit {

  @Input() clock!:GameClock;
  constructor(public game:GameService, public log:GameLogService) { }
  set:boolean = false;
  min:number = 0;
  sec:number = 0;
  periods:PeriodType[] = [];
  
  ngOnInit(): void {
    for (const [key, value] of Object.entries(PERIOD)) {
      this.periods.push(value);
    }
  }
  start(){
    if(this.clock.time  == this.clock.length * 60 * 1000)
    {
      let ordinal = new OrdinalPipe();
      this.log.addNote(this.clock, `start of ${ordinal.transform(this.clock.period)} ${this.clock.periodType.name}`);
    }
    else
      this.log.addNote(this.clock, "clock started");
    this.clock.startClock();
    
  }
  stop(){
    if(this.clock.isRuning)
    {
      this.game.game.ball = undefined;
      this.clock.stopClock();
      this.log.addNote(this.clock, "clock stopped");
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
    this.log.addNote(this.clock, "clock reset to " + this.clock.getTimeLabel());
  }
  cancel(){
    this.set = false;
  }
}
