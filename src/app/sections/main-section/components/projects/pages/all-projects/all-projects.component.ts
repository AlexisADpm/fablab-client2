import { Component, input, signal } from '@angular/core';
import { CardComponent } from '../../../../../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import dblocalproyectos from '../../../../../../utils/dblocalproyectos.json';
import { ProjectsInterface } from '../../../../../../interfaces/projects.interface';
import { FilterComponent } from '../../components/filter/filter.component';
import { OrderByComponent } from '../../components/order-by/order-by.component';
import { filterProjectsPipe } from '../../../../../../pipes/filterProyects.pipe';

@Component({
  selector: 'all-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterLink,
    FilterComponent,
    OrderByComponent,
    filterProjectsPipe
  ],
  templateUrl: './all-projects.component.html',
})
export class AllProjectsComponent {
  proyecto: ProjectsInterface[] = dblocalproyectos;

  filtrosRecibidos = signal<string[]>(["Otro"]);

  recibirFiltros(filtros:string[]): void{

  }

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}
