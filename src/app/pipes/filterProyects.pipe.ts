import { Pipe, PipeTransform } from '@angular/core';
import { ProjectsInterface } from '../interfaces/projects.interface';

@Pipe({
  name: 'filterProjects'
})

export class filterProjectsPipe implements PipeTransform {
  transform(proyectos: ProjectsInterface[], filtros:string[]): ProjectsInterface[] {
    return proyectos.filter((proyecto) => filtros.includes(proyecto.title));

  }
}
