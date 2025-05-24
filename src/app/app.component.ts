import { Component } from '@angular/core';
import {
  IonMenu, IonApp, IonHeader, IonToolbar, IonTitle,
  IonContent, IonList, IonMenuToggle, IonIcon, IonItem, IonLabel,
  IonFooter, IonRouterOutlet,
  MenuController
} from '@ionic/angular/standalone';

import { addIcons } from "ionicons";
import { scanOutline } from 'ionicons/icons';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    RouterModule, CommonModule,
    IonMenu, IonApp, IonHeader, IonToolbar, IonTitle,
    IonContent, IonList, IonMenuToggle, IonIcon, IonItem, IonLabel, IonFooter,
    IonRouterOutlet,

  ],
})
export class AppComponent {
  constructor(

  ) {
    addIcons({ scanOutline });
  }

  signOut() {
    console.log("AppComponent::signOut")
  }
}
