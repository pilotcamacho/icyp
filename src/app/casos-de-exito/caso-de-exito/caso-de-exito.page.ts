import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caso-de-exito',
  templateUrl: './caso-de-exito.page.html',
  styleUrls: ['./caso-de-exito.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class CasoDeExitoPage implements OnInit {


  caso: any;


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


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.caso = this.casosDeExito.find(c => c.id === id);
  }
}
