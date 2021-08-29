import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ShotService } from '../shot.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.less']
})
export class ScoreboardComponent implements OnInit {

  constructor(public gameService:GameService, public shotService: ShotService) { }

  ngOnInit(): void {
  }

}
