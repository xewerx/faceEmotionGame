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
  scoreActually = 0;
  score = 0;
  level = 1;
  emoji = 'nic';
  emojiName = 'nic2';

  test1 = 'happy';
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

    this.gameService.getValueProgressBar().subscribe( data =>
      this.loadingValue = data);

    let result =  Math.floor(Math.random() * 7);
    this.emoji = this.emotions[this.emotionsTab[result]].slice(0, 2);
    this.emojiName = this.emotions[this.emotionsTab[result]].slice(2);
    setInterval( () => {
      // if (this.loadingValue >= 100) {console.log('KONIEC'); }
      if (this.test1 === this.emojiName) {
        console.log('dupa');
        result =  Math.floor(Math.random() * 7);
        this.emoji = this.emotions[this.emotionsTab[result]].slice(0, 2);
        this.emojiName = this.emotions[this.emotionsTab[result]].slice(2);
        this.scoreActually++;
        this.score++;
      }

      console.log(this.gameService.currentEmoji);




    }, 100);
  }

}
