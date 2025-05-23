import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

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
    path: '**',
    redirectTo: '',
  },
];
