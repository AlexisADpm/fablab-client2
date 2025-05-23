import { Routes } from '@angular/router';
import { MachinesPageComponent } from './machines-page/machines-page.component';

export const routes: Routes = [

  {
    path: '',
    component: MachinesPageComponent,
  },
  {
    path: 'models/:idModel',
    loadComponent: () => import('./models-component/models-component.component')
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;



