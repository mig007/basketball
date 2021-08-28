import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { GameService } from '../game.service';

@Component({
  selector: 'app-active-players',
  templateUrl: './active-players.component.html',
  styleUrls: ['./active-players.component.less']
})
export class ActivePlayersComponent implements OnInit {

  @Input() players!:Player[];
  
  constructor(public gameService:GameService) { }
  
  ngOnInit(): void {

  }
  

}
