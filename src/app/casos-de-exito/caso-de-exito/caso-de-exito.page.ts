import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
} from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CasosDeExitoService } from 'src/app/services/casos-de-exito.service';

@Component({
  selector: 'app-caso-de-exito',
  templateUrl: './caso-de-exito.page.html',
  styleUrls: ['./caso-de-exito.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CasoDeExitoPage implements OnInit {

  imageList: string[] = [];

  caso: any;

  casosDeExito: { id: string, titulo: string, descripcion: string, path: string, cnt: number }[] = []


  constructor(
    private route: ActivatedRoute,
    private casosDeExitoSrv: CasosDeExitoService
  ) {
    this.casosDeExito = this.casosDeExitoSrv.casosDeExito;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.caso = this.casosDeExito.find(c => c.id === id);

    if (this.caso) {
      const basePath = `assets/img/${this.caso.path}`;
      this.imageList = Array.from({ length: this.caso.cnt }, (_, i) => `${basePath}/${i + 1}.jpg`);
    }
  }
}
