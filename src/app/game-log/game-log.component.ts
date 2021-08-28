import { Component, OnInit } from '@angular/core';
import { GameLogService } from '../game-log.service';
import { IGameLog } from '../igame-log';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-log',
  templateUrl: './game-log.component.html',
  styleUrls: ['./game-log.component.less']
})
export class GameLogComponent implements OnInit {

  constructor(private logService:GameLogService, public game:GameService) { }
  logs!:IGameLog[];
  ngOnInit(): void {
    this.logs = this.logService.logs;
  }

}
