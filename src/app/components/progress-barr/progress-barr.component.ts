import {Component, OnInit } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';



@Component({
  selector: 'app-progress-barr',
  templateUrl: './progress-barr.component.html',
  styleUrls: ['./progress-barr.component.css']
})
export class ProgressBarrComponent implements OnInit {

  value = 1;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.value += 0.4, 50);
  }

}
