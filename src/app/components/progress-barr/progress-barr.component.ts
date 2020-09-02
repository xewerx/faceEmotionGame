import {Component, OnInit } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';



@Component({
  selector: 'app-progress-barr',
  templateUrl: './progress-barr.component.html',
  styleUrls: ['./progress-barr.component.css']
})
export class ProgressBarrComponent implements OnInit {

  value = 0;
  difference = 0.4;
  constructor() {}

  ngOnInit(): void {


    const loading = setInterval(() => {
    if (this.value >= 100) {  this.value = 0; console.log(this.value); this.difference *= 2; } else { this.value += this.difference; }
  }, 50);



    }



}
