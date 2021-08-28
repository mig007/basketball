import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-action[player]',
  templateUrl: './player-action.component.html',
  styleUrls: ['./player-action.component.less']
})
export class PlayerActionComponent implements OnInit {

  constructor(public gameService:GameService) { }
  @Input()  player!:Player;
  ngOnInit(): void {
    
  }
  sub(){
    this.gameService.tempSub = this.player;
  }
  cancelSub(){
    this.gameService.tempSub = null;
  }
}
