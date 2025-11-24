import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, finalize, map, Observable, of } from 'rxjs';
import { ProjectsResponseInterface } from '../utils/responseInterfaces/projectsResponse';
import { projectsMapperApiToProjectsArray } from '../utils/mappers/projectsMapper';
import { ProjectsInterface } from '../interfaces/projects.interface';

@Injectable({providedIn: 'root'
})
export class ProjectsService {

  //Servicios
  httpclient = inject(HttpClient);

  //Atributos
  projectsLoading = signal<boolean>(false);



  constructor(){
    this.getProjects().subscribe();
  }



  getProjects(): Observable<ProjectsInterface[] | null>{

    if(this.projectsLoading()){
      return of(null);
    }

    this.projectsLoading.set(true);

    return this.httpclient.get<ProjectsResponseInterface[]>("http://localhost:5263/api/proyectos").pipe(
          map((resp)=>{
            console.log(resp);
            return projectsMapperApiToProjectsArray(resp);
          }),
          catchError((err)=>{
            console.log(err);
            return of(null);

          }),
          finalize(()=>{
            this.projectsLoading.set(false);
          })
        );


  }



}
