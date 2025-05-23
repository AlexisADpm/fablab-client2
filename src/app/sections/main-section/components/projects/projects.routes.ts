import { Routes } from '@angular/router';
import { ProyectsComponent } from './projects.component';
import { IndividualProjectComponent } from './individual-project/individual-project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';

export const routes: Routes = [
  {
    path: '',
    component: AllProjectsComponent,
  },
  {
    path: 'individual',
    component: IndividualProjectComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
export default routes;
