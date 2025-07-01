import { Routes } from '@angular/router';
import { NewsPageComponent } from './news-page.component';


export const routes: Routes = [

  {
    path: '',
    component: NewsPageComponent,
  },
  {
    path: ":id",
    loadComponent: () => import("./individual-new-page/individual-new-page.component")
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default routes;



