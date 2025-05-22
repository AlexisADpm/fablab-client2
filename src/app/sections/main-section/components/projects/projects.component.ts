import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { IndividualProjectComponent } from './individual-project/individual-project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

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
  imports: [
    CommonModule,
    CardComponent,
    IndividualProjectComponent,
    AllProjectsComponent,
  ],
  templateUrl: './projects.component.html',
})
export class ProyectsComponent {
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
  ];
}
