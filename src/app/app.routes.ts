import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'servicios',
    loadComponent: () => import('./servicios/servicios.page').then(m => m.ServiciosPage)
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('./quienes-somos/quienes-somos.page').then(m => m.QuienesSomosPage)
  },
  {
    path: 'casos-de-exito',
    loadComponent: () => import('./casos-de-exito/casos-de-exito.page').then(m => m.CasosDeExitoPage)
  },
  {
    path: 'caso-de-exito/:id',
    loadComponent: () => import('./casos-de-exito/caso-de-exito/caso-de-exito.page').then(m => m.CasoDeExitoPage)
  },
];
