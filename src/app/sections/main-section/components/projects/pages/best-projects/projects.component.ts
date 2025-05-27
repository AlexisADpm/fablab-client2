import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import dblocalproyectos from '../../dblocalproyectos.json';

@Component({
  selector: 'projects-main',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink],
  templateUrl: './projects.component.html',
})
export class ProyectsComponent {
  proyectosdb = dblocalproyectos;
}
