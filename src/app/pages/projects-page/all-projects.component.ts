import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import dblocalproyectos from '../../utils/dblocalproyectos.json';
import { ProjectsInterface } from '../../interfaces/projects.interface';
import { FilterComponent } from '../../sections/main-section/components/projects/components/filter/filter.component';
import { OrderByComponent } from '../../sections/main-section/components/projects/components/order-by/order-by.component';
import { ProjectsFilterPipe } from '../../pipes/projectsFilter.pipe';
import { filterProjectsPipe } from '../../pipes/filterProyects.pipe';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'all-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterLink,
    FilterComponent,
    OrderByComponent,
    filterProjectsPipe,
  ],
  templateUrl: './all-projects.component.html',
})
export class AllProjectsComponent {

  //Servicios
  projectsService = inject(ProjectsService);

  proyecto: ProjectsInterface[] = [];

  filtrosRecibidos = signal<string[]>([]);

  recibirFiltros(filtros: string[]): void {
    this.filtrosRecibidos.set(filtros);
  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
