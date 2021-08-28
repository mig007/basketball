import { Injectable, PlatformRef } from '@angular/core';
import { Game } from './game';
import { Team } from './team';
import { GameClock } from './game-clock';
import { PeriodType } from './period-type';
import { Player } from './player';
import { ToastService} from './toast-service.service';
import { GameLogService } from './game-log.service';
import { Substitution } from './substitution';
import { Shot } from './shot';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  isReady:boolean = false;
  game!:Game;
  clock!:GameClock;
  selected?:Player;
  tempSub:Player|null = null;
  leftSide!:Team;

  constructor(private toast:ToastService, private log:GameLogService) {}
   init(home:Team,away:Team, lengthInMin:number, type:PeriodType){
     if(!this.isReady)
     {
      this.game = new Game(home,away);
      this.clock = new GameClock(1, type, lengthInMin);
      this.isReady = true;
      this.leftSide = home;
      for(let i=0; i < 5 && i < home.players.length; i++)
      {
        this.subPlayer(home.players[i]);
      }
      for(let i=0; i < 5 && i < away.players.length; i++)
      {
        this.subPlayer(away.players[i]);
      }
     }
   }

  //events
  pass(from:Player, to:Player){
    this.log.addNote(this.clock, `${from.getName()} passes to ${to.getName()}`);
  }
  inbound(from:Player, to:Player){
    if(this.onSameTeam(from, to))
      this.log.addNote(this.clock, `${from.getName()} inbounds to ${to.getName()}`);
    else
      this.log.addNote(this.clock, `inbound pass stolen by ${to.getName()}`);
  }
  steal(turnover:Player, steal:Player){
    this.log.addNote(this.clock, `${steal.getName()} steals ball from ${turnover.getName()}`);
  }
  rebound(shot:Player, rebound:Player){
    if(this.getPlayerTeam(shot) == this.getPlayerTeam(rebound))
    {
      this.log.addNote(this.clock, `offsenive rebound by ${rebound.getName()}`);
    }
    else{
      this.log.addNote(this.clock, `defensive rebound by ${rebound.getName()}`);
    }
  }
  
  selectPlayer(player:Player){
    
    if(this.tempSub)
    {
      let result = this.subPlayer(this.tempSub, player);
      if(!result)
        return;
      this.tempSub = null;
    }
     //store our last player and his status
     let prevSelected = this.selected;
    //select the new player
    this.selected = player;

    let active = this.getTeamLineup(player);
    //if we don't have 5 players for this team and the player is innactive then activate the player
    if(!this.tempSub && active && active.length < 5 && !this.isActivePlayer(player))
      this.subPlayer(player);
    


    if(this.clock.isRuning && this.isActivePlayer(player))
    {
      let lastEvent = this.log.getLast();
      //if the last event was a shot
      if(lastEvent instanceof Shot)
      {
          let shot = lastEvent as Shot; 
          if(shot.make === undefined)
          {
            this.toast.pop("warning", "Invalid Selection", "Select if the shot was made before selecting another player");
            return;
          }
          if(shot.make)
          {
            if(!this.game.ball && this.onSameTeam(player, shot.player))
            {
              this.toast.pop("warning", "Invalid Selection", "The ball must be inbounded by the other team");
              return;
            }

            //after a bassket is made it must be taken by the other team
            if(!this.game.ball && !this.onSameTeam(player, shot.player))
              this.game.ball = player;
           
            

            //after a made shot and a member from the other team is selected it will be inbound
            if(this.game.ball && player != this.game.ball)
            {
                this.inbound(this.game.ball, player);
                this.game.ball = player;
            }
            
            

          }
          else
          {
            this.rebound(shot.player, player);
            this.game.ball = player;
          }
      }
      else
      {

        if(this.game.ball && this.onSameTeam(this.game.ball, player))
          this.pass(this.game.ball, player);
        else if(this.game.ball  && !this.onSameTeam(this.game.ball, player))
          this.steal(this.game.ball, player);

        this.game.ball = player;
      }

    }
 }
 onSameTeam(player1:Player, player2:Player){
  return this.getPlayerTeam(player1) === this.getPlayerTeam(player2);
 }


   isActivePlayer(player?:Player):boolean{
     if(!player)
        return false;
      let retval = false;

      this.game.homeActive.forEach(x => {
        if(x == player)
        {
          retval =true;
        }
      });

      this.game.awayActive.forEach(x => {
        if(x == player)
        {
          retval =true;
        }
      });
      return retval;  
   }
   
   

   switchSides(){
      this.leftSide = (this.leftSide == this.game.home ? this.game.away : this.game.home);
   }

   getTeamLineup(player:Player):Player[]|null{
    let retval = null;
    this.game.home.players.forEach(x => {
      if(x == player)
      {
        retval = this.game.homeActive; 
      }
    });
    this.game.away.players.forEach(x => {
      if(x == player)
      {
        retval = this.game.awayActive; 
      }
    });

    return retval;
   }

   getPlayerTeam(player:Player):Team|null{
    let retval = null;
    this.game.home.players.forEach(x => {
      if(x == player)
      {
        retval = this.game.home; 
      }
    });
    this.game.away.players.forEach(x => {
      if(x == player)
      {
        retval = this.game.away; 
      }
    });

    return retval;
   }

   subPlayer(player1:Player, player2?:Player):boolean
   {
     let retval:boolean = true;
      
      let team1 = this.getPlayerTeam(player1);
      let active1 = this.isActivePlayer(player1);
      if(active1 && !player2)
      {
        this.toast.pop("warning", 'Invalid Selection', `${player1.getName()} is already active`);
        return false;
      }
      if(player1 == player2)
      {
        this.toast.pop("warning", 'Invalid Selection', `Select another player to sub for ${player1.getName()}`);
        return false;
      }
      if(player2)
      {
        let team2= this.getPlayerTeam(player2);
        let active2 = this.isActivePlayer(player2);
       //make sure they are on the same team
        if(team1 != team2)
        {
          this.toast.pop("warning", 'Invalid Selection', "Please selecte players from the same team");
          return false;
        }
        if(active1 == active2)
        {
          if(active1)
            this.toast.pop("warning", 'Invalid Selection', "Both players are active");
          if(!active1)
            this.toast.pop("warning", 'Invalid Selection', "Both players are on the bench");
          return false;
        }
        
        //bench the players first to open up the roster spoot
        if(active2 && retval)
          retval = this.benchPlayer(player2);
        if(active1 && retval)
          retval = this.benchPlayer(player1);
        if(!active2 && retval)
          retval =   this.activatePlayer(player2);
      }
      if(!active1 && retval)
        retval =  this.activatePlayer(player1);

      if(retval)
        this.log.add(new Substitution(this.clock.time, this.clock.period, this.clock.periodType, (active1 && player2 ? player2: player1), (active1 ? player1: player2)));
      

     return retval;
       
   }

   private benchPlayer(player:Player):boolean{
     let active = this.getTeamLineup(player);
      if(!active)
      {
        this.toast.pop("warning", 'Unable to bench', "Player cannot be found on team roster");
        return false;
      }
      let idx = active.indexOf(player);
      if(idx === -1)
      {
        this.toast.pop("warning", 'Unable to bench', "Player is not active");
        return false;
      }
      active.splice(idx, 1);
      return true;
   }
   private activatePlayer(player:Player):boolean{
      let active = this.getTeamLineup(player);
      if(!active)
      {
        this.toast.pop("warning", 'Unable to active', "Player cannot be found on team roster");
        return false;
      }
      if(active.indexOf(player) !== -1)
      {
        this.toast.pop("warning", 'Unable to active', "Player is already active");
        return false;
      }
      if(active.length >= 5)
      {
        this.toast.pop("warning", 'Unable to active', "5 Players are already active");
        return false;
      }
      active.push(player);
      return true;
  }
   
  

}
