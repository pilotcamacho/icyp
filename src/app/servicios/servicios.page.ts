import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
  IonList, IonItem, IonIcon, IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from "ionicons";
import { checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonMenuButton, IonList, IonItem, IonLabel
  ]
})
export class ServiciosPage implements OnInit {

  servicios: string[] = [
    'Gestión con medios para publicación de artículos, entrevistas, reportajes, crónicas, etc, de servicios, productos, temas, noticias y personajes',
    'Entrenamiento a voceros',
    'Redacción de comunicados',
    'Generación de noticias',
    'Creación de estrategias de PR',
    'Acompañamiento en eventos nacionales',
    'Convocatoria de medios',
    'Organización de rondas de Medios, Ruedas de Prensa, o entrevistas One to One, según sea el caso',
    'Coordinación de entrevistas y de giras de medios cuando haya lugar',
    'Manejo de Crisis'
  ];

  constructor() {
    addIcons({ checkmarkCircleOutline });
  }

  ngOnInit() {
  }

}
