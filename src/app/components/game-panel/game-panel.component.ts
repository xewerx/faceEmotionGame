import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  isVisible = 'true';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  hideOverlay() {
    this.isVisible = 'none';
    this.gameService.isClickedSend();
  }

}
