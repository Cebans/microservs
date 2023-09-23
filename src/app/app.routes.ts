import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'personas',
    pathMatch: 'full',
  },
  {
    path: 'personas',
    loadComponent: () => import('./pages/personas/personas.page').then( m => m.PersonasPage)
  },
];
