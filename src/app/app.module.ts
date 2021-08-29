import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourtComponent } from './court/court.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShotHistoryComponent } from './shot-history/shot-history.component';
import { GameLogComponent } from './game-log/game-log.component';
import { ReversePipe } from './reverse.pipe';
import { TeamComponent } from './team/team.component';
import { GameClockComponent } from './game-clock/game-clock.component';
import { OrdinalPipe } from './ordinal.pipe';
import { ActivePlayersComponent } from './active-players/active-players.component';
import { ToasterContainerComponent } from './toaster-container/toaster-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortPipe } from './sort.pipe';
import { PlayerActionComponent } from './player-action/player-action.component';
import { FinalizeShotComponent } from './finalize-shot/finalize-shot.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CourtComponent,
    DashboardComponent,
    ShotHistoryComponent,
    GameLogComponent,
    ReversePipe,
    TeamComponent,
    GameClockComponent,
    OrdinalPipe,
    ActivePlayersComponent,
    ToasterContainerComponent,
    SortPipe,
    PlayerActionComponent,
    FinalizeShotComponent,
    ScoreboardComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
