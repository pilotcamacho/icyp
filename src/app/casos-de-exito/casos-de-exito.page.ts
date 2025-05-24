import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList,
  IonGrid, IonRow, IonCol,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonBackButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casos-de-exito',
  templateUrl: './casos-de-exito.page.html',
  styleUrls: ['./casos-de-exito.page.scss'],
  standalone: true,
  imports: [IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton,
    IonGrid, IonRow, IonCol,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonBackButton
  ]
})
export class CasosDeExitoPage implements OnInit {

  casosDeExito = [
    {
      id: 'artcartagena',
      titulo: 'Artcartagena',
      descripcion: 'Promoción cultural y artística en Cartagena con impacto internacional.'
    },
    {
      id: 'economia-negocios',
      titulo: 'Economía y Negocios',
      descripcion: 'Transformación digital en sectores empresariales clave.'
    },
    {
      id: 'infraestructura',
      titulo: 'Infraestructura',
      descripcion: 'Desarrollo de proyectos sostenibles con enfoque social.'
    },
    {
      id: 'galeria-cano',
      titulo: 'Galería Cano',
      descripcion: 'Rescate y exposición de arte colonial colombiano.'
    },
    {
      id: 'botero-china',
      titulo: 'Botero en China',
      descripcion: 'Exposición internacional del maestro Botero en Shanghái y Pekín.'
    }
  ];



  constructor(private router: Router) { }

  ngOnInit() {
  }

  verDetalle(id: string) {
    this.router.navigate(['/caso-de-exito', id]);
  }

}
