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

@NgModule({
  declarations: [
    AppComponent,
    CourtComponent,
    DashboardComponent,
    ShotHistoryComponent,
    GameLogComponent,
    ReversePipe,
    TeamComponent,
    GameClockComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
