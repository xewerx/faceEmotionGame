import { Component, OnInit} from '@angular/core';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  emotions = {
    neutral: 'Neutralny 😐',
    surprised: 'Zaskoczony 😮',
    disgusted: 'Zniesmaczony',
    fearful: 'Wystraszony 😨',
    sad: 'Smutny 🙁',
    angry: 'Zły 😠',
    happy: 'Wesoły 😃',
};
    video: any;
    canvas: any;
    result: any;
    displaySize: any;

  constructor() {}

  ngOnInit(): void {
    this.canvas = document.querySelector('.js-overlay');
    this.result = document.querySelector('.js-emotion');
    this.video = document.querySelector('.js-video');
    this.displaySize = { width: '850', height: '550' };

    // this.startVideo();

    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('assets'),
      faceapi.nets.faceExpressionNet.loadFromUri('assets')
     ]).then(/*() => this.startVideo(this.video)*/).catch(() => console.log('nie dziala'));

   }

  startVideo(videoStream): void {

    navigator.getUserMedia({ video: true },
        (stream) => {
          videoStream.srcObject = stream;
          this.detectFace();
          },
          (err) => {
            return console.error(err);
          }
      );



  }

  showExpression({ expressions }) {
    const arr = Object.entries(expressions);
    const max = arr.reduce((acc, current) => {
      return acc[1] > current[1] ? acc : current;
    }, []);
    this.result.textContent = this.emotions[max[0]];
  }

  async detectFace() {

    const options = new faceapi.TinyFaceDetectorOptions();
    faceapi.matchDimensions(this.canvas, this.displaySize);

    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(this.video, options).withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, this.displaySize);
      this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
      faceapi.draw.drawDetections(this.canvas, resizedDetections);

      if (detections[0]) {
        this.showExpression(detections[0]);
      }
    }, 100);

  }










}
