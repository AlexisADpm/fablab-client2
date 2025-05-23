import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [

  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'proyectos',
    loadComponent: () => import("./pages/projects-page/projects-page.component")
  },
  {
    path:'maquinas',
    loadChildren: () => import('./pages/machines-page/machines.routes')

  },
  {
    path: '**',
    redirectTo: ''
  }
];
