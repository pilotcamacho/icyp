import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.page.html',
  styleUrls: ['./quienes-somos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButtons, IonMenuButton
  ]
})
export class QuienesSomosPage implements OnInit {


  personas = [
   {
      nombre: 'Patricia Rodríguez Sánchez',
      cargo: 'Comunicadora Social y Periodista',
      email: 'patriciaprensayproduccion@gmail.com',
      foto: '/assets/img/patricia-rodriguez.jpg',
      cv: 'Patricia es redactora, investigadora, reportera, productora y asesora en comunicaciones con más de 20 años de experiencia. Ha trabajado en medios como Caracol Televisión, CM&, Colprensa, El Tiempo y El Espectador. Ha liderado campañas exitosas de Free Press, trabajado para entidades públicas y privadas, y ejecutado estrategias para eventos, arte, cultura, gastronomía y marcas reconocidas. Su enfoque creativo y ejecutor la posiciona como una experta integral en medios y comunicación estratégica.'
    },
    {
      nombre: 'Fernando Camacho Ospina',
      cargo: 'Data Scientist',
      email: 'fernando@peopleart.co',
      foto: '/assets/img/fernando-camacho.png',
      cv: `Innovador y creativo, con amplia experiencia en el desarrollo de productos basados en datos. Posee sólidos conocimientos estadísticos, excelente modelado matemático y grandes habilidades de programación. Líder en la creación y aplicación de soluciones de vanguardia en entornos industriales y gubernamentales. Con una formación multicultural, conocimientos multidisciplinarios, la rigurosidad académica, una clara comprensión de las necesidades del cliente y grandes habilidades de gestión, ha liderado y participado activamente en numerosos proyectos, como el diseño de un vehículo eléctrico ultraligero, la implementación de un sistema completo de telemedicina en la República de Sudán, la reestructuración total de la entrega de clases en vivo en una plataforma de educación en línea, o un proyecto de marketing digital galardonado, entre otros. Gran líder de equipo y colaborador. Habla español, inglés y alemán con fluidez.`
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
