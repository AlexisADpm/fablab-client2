import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface project {
  proyectId: number;
  participantes: string;
  title: string;
  description: string;
  date: string;
  imgUrl: string;
}

@Component({
  selector: 'projects-main',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './projects.component.html',
})
export class ProyectsComponent {
  dbLocalProyectos: project[] = [
    {
      proyectId: 1,
      participantes: 'Elena, Marcos',
      title: 'Estación Meteorológica',
      description:
        'Creación de una estación meteorológica IoT para monitoreo ambiental en tiempo real.',
      date: '2024-06-05',
      imgUrl:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', // estación meteorológica
    },
    {
      proyectId: 2,
      participantes: 'Pedro, Lucía',
      title: 'Sistema de Riego Automático',
      description:
        'Desarrollo de un sistema inteligente de riego para jardines urbanos.',
      date: '2024-06-12',
      imgUrl:
        'https://th.bing.com/th/id/OIP.RmLRNPC8GHqDywGRofQnIwHaE7?rs=1&pid=ImgDetMain', // riego automático
    },
    {
      proyectId: 3,
      participantes: 'Miguel, Valeria',
      title: 'Lámpara LED Programable',
      description:
        'Diseño y programación de una lámpara LED con efectos personalizables.',
      date: '2024-06-18',
      imgUrl:
        'https://th.bing.com/th/id/OIP.RkX_uCBIPGajMmSIoHpaDwHaFj?rs=1&pid=ImgDetMain', // lámpara LED
    },
  ];
}
