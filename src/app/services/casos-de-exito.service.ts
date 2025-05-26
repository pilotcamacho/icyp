import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasosDeExitoService {

  casosDeExito: { id: string, titulo: string, descripcion: string, path: string, cnt: number }[] = [
    {
      id: 'artcartagena',
      titulo: 'Artcartagena',
      descripcion: 'Promoción cultural y artística en Cartagena con impacto internacional.',
      path: 'artcartagena',
      cnt: 6
    },
    {
      id: 'economia-negocios',
      titulo: 'Economía y Negocios',
      descripcion: 'Transformación digital en sectores empresariales clave.',
      path: 'economia',
      cnt: 7
    },
    {
      id: 'infraestructura',
      titulo: 'Infraestructura',
      descripcion: 'Desarrollo de proyectos sostenibles con enfoque social.',
      path: 'infraestructura',
      cnt: 4
    },
    {
      id: 'galeria-cano',
      titulo: 'Galería Cano',
      descripcion: 'Rescate y exposición de arte colonial colombiano.',
      path: 'galeriacano',
      cnt: 3
    },
    {
      id: 'botero-china',
      titulo: 'Botero en China',
      descripcion: 'Exposición internacional del maestro Botero en Shanghái y Pekín.',
      path: 'botero',
      cnt: 4
    }
  ];

  constructor() { }
}
