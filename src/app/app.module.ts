import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarrComponent } from './components/progress-barr/progress-barr.component';
import { GamePanelComponent } from './components/game-panel/game-panel.component';
import { CameraComponent } from './components/camera/camera.component';
import { RankingTableComponent } from './components/ranking-table/ranking-table.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarrComponent,
    GamePanelComponent,
    CameraComponent,
    RankingTableComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
