import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import dblocalproyectos from '../../../../../../utils/dblocalproyectos.json';
import { ProjectsInterface } from '../../../../../../interfaces/projects.interface';

@Component({
  selector: 'projects-main',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './projects.component.html',
})
export class ProyectsComponent {
  proyecto: ProjectsInterface[] = dblocalproyectos;
}
