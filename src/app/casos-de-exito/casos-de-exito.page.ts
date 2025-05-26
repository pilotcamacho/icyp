import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,
  IonGrid, IonRow, IonCol,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CasosDeExitoService } from '../services/casos-de-exito.service';

@Component({
  selector: 'app-casos-de-exito',
  templateUrl: './casos-de-exito.page.html',
  styleUrls: ['./casos-de-exito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton,
    IonGrid, IonRow, IonCol,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class CasosDeExitoPage implements OnInit {

  casosDeExito: { id: string, titulo: string, descripcion: string, path: string, cnt: number }[];

  constructor(
    private router: Router,
    private casosDeExitoSrv: CasosDeExitoService
  ) {
    this.casosDeExito = this.casosDeExitoSrv.casosDeExito;
  }

  ngOnInit() {
  }

  verDetalle(id: string) {
    this.router.navigate(['/caso-de-exito', id]);
  }

}
