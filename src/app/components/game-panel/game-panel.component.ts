import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {
  emotions = {
    neutral: '😐neutral',
    surprised: '😮surprised',
    disgusted: '😕disgusted',
    fearful: '😨fearful',
    sad: '🙁sad',
    angry: '😠angry',
    happy: '😃happy',
};

emotionsTab = ['neutral', 'surprised', 'disgusted', 'fearful', 'sad', 'angry', 'happy'];

  isVisible = 'true';
  score = 0;
  bestScore = 0;
  emoji = 'error';
  emojiName = 'error';

  loadingValue = 0;
  emojiFromCamera;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

  }

  hideOverlay() {
    this.isVisible = 'none';
    this.gameService.isClickedSend();
    this.game();
  }

  game() {
    this.score = 0;
    this.gameService.getValueProgressBar().subscribe( data =>
      this.loadingValue = data);

    let result =  Math.floor(Math.random() * 7);
    this.emoji = this.emotions[this.emotionsTab[result]].slice(0, 2);
    this.emojiName = this.emotions[this.emotionsTab[result]];

    const process = setInterval( () => {
      if (this.loadingValue >= 102) {
        this.isVisible = '';
        clearInterval(process);
        if (this.score > this.bestScore) {
          this.bestScore = this.score;
        }
      }
      if (this.emojiName === this.gameService.currentEmoji) {
        result =  Math.floor(Math.random() * 7);
        this.emoji = this.emotions[this.emotionsTab[result]].slice(0, 2);
        this.emojiName = this.emotions[this.emotionsTab[result]];
        this.score++;
      }




    }, 100);
  }

}
