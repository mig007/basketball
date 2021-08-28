import { Component, OnInit, Input } from '@angular/core';
import { Shot } from '../shot';
import { ShotService } from '../shot.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-finalize-shot[shot]',
  templateUrl: './finalize-shot.component.html',
  styleUrls: ['./finalize-shot.component.less']
})
export class FinalizeShotComponent implements OnInit {
  @Input() shot!:Shot;
  @Input()top:number = 0;
  @Input()left:number = 0;
  constructor(private shotService:ShotService, private gameService:GameService) { }

  ngOnInit(): void {
  }
  remove(){
    this.shotService.removeShot(this.shot);
    this.shot.make = false;
  }
  finalizeShot(make:boolean)
  {
    this.shot.make = make;
    if(make)
      this.gameService.game.ball = undefined;
  }

}
