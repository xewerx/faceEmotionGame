import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private valueProgressBar = 0;
  private valueProgressBarSum = new Subject<number>();

  private isClickedSum = new Subject<boolean>();
  isClicked = false;

  currentEmoji;
  private currentEmojiSum = new Subject<string>();

  loading(difference): Observable<number> {
    const action = setInterval(() => {
      // tslint:disable-next-line: max-line-length
      if (this.valueProgressBar >= 100) { clearInterval(action); } else { this.valueProgressBarSum.next(this.valueProgressBar += difference); }
    }, 50);

    return this.valueProgressBarSum.asObservable();
  }

  getValueProgressBar(): Observable<number> {
    return this.valueProgressBarSum.asObservable();
  }

  isClickedSend(): Observable<boolean> {
    this.isClicked = true;
    this.isClickedSum.next(this.isClicked);
    return this.isClickedSum.asObservable();
  }

}
