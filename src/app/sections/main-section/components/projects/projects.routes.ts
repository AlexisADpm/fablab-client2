import { Routes } from '@angular/router';
import { IndividualProjectComponent } from './pages/individual-project/individual-project.component';
import { AllProjectsComponent } from '../../../../pages/projects-page/all-projects.component';

export const routes: Routes = [
  {
    path: '',
    component: AllProjectsComponent,
  },
  {
    path: ':id',
    component: IndividualProjectComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default routes;
