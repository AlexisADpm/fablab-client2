import { Routes } from '@angular/router';
import { MachinesPageComponent } from './machines-page/machines-page.component';

export const routes: Routes = [

  {
    path: 'models/:idModel',
    loadComponent: () => import('./models-component-page/models-component.component')
  },
  {
    path: '',
    component: MachinesPageComponent,
    children:[
      {
        path: ':category',
        loadComponent: () => import('./components/machine-card-item-list/machine-card-item.component')
      },
      {
        path: '**',
        redirectTo: 'todas'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;



