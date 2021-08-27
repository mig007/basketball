import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { GameClock } from '../game-clock';

@Component({
  selector: 'app-game-clock',
  templateUrl: './game-clock.component.html',
  styleUrls: ['./game-clock.component.less']
})
export class GameClockComponent implements OnInit {

  constructor(public game:GameService) { }
  set:boolean = false;
  min:number = 0;
  sec:number = 0;
  ngOnInit(): void {
    
  }
  setClock(){
    this.game.stopClock();
   
    this.min = this.game.clock.getMinutesCommponent();
    this.sec = this.game.clock.getSecondsComponent();
    this.set = true;
  }
  confirmSet(){
    this.game.clock.setClock(this.min, this.sec);
    this.set = false;
  }
  cancel(){
    this.set = false;
  }
}
