import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Nosotros } from './pages/nosotros/nosotros';

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
    path: 'noticias',
    loadChildren: () => import('./pages/news-page/news.routes'),
  },
  {
    path: 'nosotros',
    component: Nosotros,
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
