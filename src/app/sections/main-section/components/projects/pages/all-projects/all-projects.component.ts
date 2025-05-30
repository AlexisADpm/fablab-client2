import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import dblocalproyectos from '../../../../../../utils/dblocalproyectos.json';
import { ProjectsInterface } from '../../../../../../interfaces/projects.interface';

@Component({
  selector: 'all-projects',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './all-projects.component.html',
})
export class AllProjectsComponent {
  proyecto: ProjectsInterface[] = dblocalproyectos;
}
