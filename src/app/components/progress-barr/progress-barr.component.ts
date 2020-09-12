import {Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';



@Component({
  selector: 'app-progress-barr',
  templateUrl: './progress-barr.component.html',
  styleUrls: ['./progress-barr.component.css']
})
export class ProgressBarrComponent implements OnInit {

   value = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {

    this.gameService.isClickedSend().subscribe( isClick => {
      if (isClick === true) {
        this.gameService.loading(0.5).subscribe( data => {
          this.value = data; } );

      }
    });



    }



}
