import { Pipe, type PipeTransform } from '@angular/core';
import { ProjectsInterface } from '../interfaces/projects.interface';

@Pipe({
  name: 'ProjectsFilter',
})
export class ProjectsFilterPipe implements PipeTransform {
  transform(
    proyectos: ProjectsInterface[],
    filtros: string[] = ['Impresora 3D']
  ): ProjectsInterface[] {
    return proyectos.filter((proyecto) => filtros.includes(proyecto.title));
  }
}
