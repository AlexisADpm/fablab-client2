import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'proyectos',
    loadChildren: () =>
      import('./sections/main-section/components/projects/projects.routes'),
  },
  {
    path: 'maquinas',
    loadChildren: () => import('./pages/machines-page/machines.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
