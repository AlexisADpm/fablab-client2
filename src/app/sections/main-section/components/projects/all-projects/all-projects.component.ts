import { Component } from '@angular/core';
import { CardComponent } from '../../../../../shared/card/card.component';

interface project {
  proyectId: number;
  participantes: string;
  title: string;
  description: string;
  date: string;
  imgUrl: string;
}
@Component({
  selector: 'app-all-projects',
  imports: [CardComponent],
  templateUrl: './all-projects.component.html',
})
export class AllProjectsComponent {
  dbLocalProyectos: project[] = [
    {
      proyectId: 1,
      participantes: 'Ana, Luis',
      title: 'Impresora 3D',
      description:
        'Desarrollo de una impresora 3D personalizada para prototipos rápidos.',
      date: '2024-05-01',
      imgUrl:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80', // impresora 3D
    },
    {
      proyectId: 2,
      participantes: 'Carlos, Marta',
      title: 'Brazo Robótico',
      description: 'Construcción de un brazo robótico controlado por Arduino.',
      date: '2024-05-10',
      imgUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // brazo robótico
    },
    {
      proyectId: 3,
      participantes: 'Sofía, Juan',
      title: 'Corte Láser',
      description: 'Diseño y fabricación de piezas mediante corte láser.',
      date: '2024-05-15',
      imgUrl:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', // corte láser
    },
    {
      proyectId: 4,
      participantes: 'Pedro, Lucía',
      title: 'Domótica',
      description:
        'Automatización de una maqueta de casa con sensores y actuadores.',
      date: '2024-05-20',
      imgUrl:
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80', // domótica
    },
    {
      proyectId: 5,
      participantes: 'Elena, Diego',
      title: 'Dron FPV',
      description: 'Montaje y configuración de un dron con cámara FPV.',
      date: '2024-05-25',
      imgUrl:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', // dron FPV
    },
    {
      proyectId: 6,
      participantes: 'Marcos, Paula',
      title: 'Estación Meteorológica',
      description:
        'Creación de una estación meteorológica con recolección de datos en tiempo real.',
      date: '2024-06-01',
      imgUrl:
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80', // estación meteorológica
    },
    {
      proyectId: 2,
      participantes: 'Carlos, Marta',
      title: 'Brazo Robótico',
      description: 'Construcción de un brazo robótico controlado por Arduino.',
      date: '2024-05-10',
      imgUrl:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // brazo robótico
    },
    {
      proyectId: 3,
      participantes: 'Sofía, Juan',
      title: 'Corte Láser',
      description: 'Diseño y fabricación de piezas mediante corte láser.',
      date: '2024-05-15',
      imgUrl:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', // corte láser
    },
    {
      proyectId: 4,
      participantes: 'Pedro, Lucía',
      title: 'Domótica',
      description:
        'Automatización de una maqueta de casa con sensores y actuadores.',
      date: '2024-05-20',
      imgUrl:
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80', // domótica
    },
    {
      proyectId: 5,
      participantes: 'Elena, Diego',
      title: 'Dron FPV',
      description: 'Montaje y configuración de un dron con cámara FPV.',
      date: '2024-05-25',
      imgUrl:
        'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', // dron FPV
    },
    {
      proyectId: 6,
      participantes: 'Marcos, Paula',
      title: 'Estación Meteorológica',
      description:
        'Creación de una estación meteorológica con recolección de datos en tiempo real.',
      date: '2024-06-01',
      imgUrl:
        'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80', // estación meteorológica
    },
  ];
}
