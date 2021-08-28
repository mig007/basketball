import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from '../team';
import { Player } from '../player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  @Input() team!:Team;
  @Output() onSelect: EventEmitter<Player> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  
  select(player:Player){
    this.onSelect.emit(player);
  }
}
