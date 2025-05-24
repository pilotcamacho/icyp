import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonMenuButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonButtons,
    CommonModule
  ],
})
export class HomePage {

  currentSlide = 0;

  slides = [
    { title: 'Welcome', content: 'This is the first slide of your presentation.' },
    { title: 'Features', content: 'You can build anything with Ionic and Angular.' },
    { title: 'Thank You', content: 'This is the end of the slideshow.' },
  ];
  constructor() { }



  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}

