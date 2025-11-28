import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, finalize, map, Observable, of } from 'rxjs';
import { ProjectsResponseInterface } from '../utils/responseInterfaces/projectsResponse';
import { projectsMapperApiToProjectsArray } from '../utils/mappers/projectsMapper';
import { ProjectsInterface } from '../interfaces/projects.interface';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({providedIn: 'root'
})
export class ProjectsService {

  //Servicios
  httpclient = inject(HttpClient);

  //Atributos
  projectsLoading = signal<boolean>(false);

  projectsResource = rxResource({
    loader: () => {
      return this.getProjects();
    }
  });

  getProjects(): Observable<ProjectsInterface[] | null>{

    return this.httpclient.get<ProjectsResponseInterface[]>("https://fablabwebapi20251104221404-crbeb0b9cafvhqg3.canadacentral-01.azurewebsites.net/api/proyectos").pipe(
      map((resp)=>{
        console.log(resp);
        return projectsMapperApiToProjectsArray(resp);
      }),
      catchError((err)=>{
        console.log(err);
        return of(null);

      })
    );
  }

  getProjectById(projectsArray: ProjectsInterface[], id: number): ProjectsInterface | null{
    if(!projectsArray){
      return null;
    }

    return projectsArray.find((pro) => pro.projectId == id)!;
  }


}
