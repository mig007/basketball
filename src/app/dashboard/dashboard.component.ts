import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Player } from '../player';
import { GameService } from '../game.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private game:GameService) { }
  home:Team = new Team("Maple Mountain");
  away:Team = new Team("Spanish Fork");
  ngOnInit(): void {
    this.home.players.push(new Player(45, "Marshall", "Packer"));
    this.home.players.push(new Player(10, "Dorny", "Logan"));
    this.home.players.push(new Player(2, "Luke", "Parker"));
    this.home.players.push(new Player(3, "Congdon", "Treyson"));
    this.home.players.push(new Player(6, "Nash", "Kayden"));
    this.home.players.push(new Player(17, "Tranchell", "Porter"));
    this.home.players.push(new Player(22, "Kromenhoek", "Mason"));
    this.home.players.push(new Player(9, "Akina", "Trey"));

    this.away.players.push(new Player(45));
    this.away.players.push(new Player(9));
    this.away.players.push(new Player(6));
    this.away.players.push(new Player(25));
    this.away.players.push(new Player(0));
    this.away.players.push(new Player(23));
    this.away.players.push(new Player(27));

    this.game.init(this.home, this.away, 20);
   

  }

}
