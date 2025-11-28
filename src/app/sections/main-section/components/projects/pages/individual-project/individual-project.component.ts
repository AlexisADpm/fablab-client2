import { Component, computed, inject, signal } from '@angular/core';
import { ProjectsService } from '../../../../../../services/projects.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectsInterface } from '../../../../../../interfaces/projects.interface';

@Component({
  selector: 'app-individual-project-page',
  imports: [RouterLink],
  templateUrl: './individual-project.component.html',
})
export class IndividualProjectPageComponent {
  //Servicios
  projectsService = inject(ProjectsService);
  route = inject(ActivatedRoute);

  //Atributos
  idRoute = signal<number | null>(null);
  projectDataGetter = computed<ProjectsInterface | null >(()=>{
    if(!this.projectsService.projectsResource.value() && !this.idRoute()){
      return null;
    }
    return this.projectsService.getProjectById(this.projectsService.projectsResource.value()!,this.idRoute()!);
  })


  //Lyfecyclehooks
  ngOnInit(): void {
    this.idRoute.set(parseInt(this.route.snapshot.paramMap.get("id")!));
  }



}
