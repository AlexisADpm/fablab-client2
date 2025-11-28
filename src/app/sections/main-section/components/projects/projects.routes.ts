import { Routes } from '@angular/router';
import { AllProjectsComponent } from '../../../../pages/projects-page/all-projects.component';
import { IndividualProjectPageComponent } from './pages/individual-project/individual-project.component';

export const routes: Routes = [
  {
    path: '',
    component: AllProjectsComponent,
  },
  {
    path: ':id',
    component: IndividualProjectPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default routes;
