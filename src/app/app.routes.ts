import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home').then((m) => m.HomeComponent),
  },
  {
    path: 'general',
    loadChildren: () => loadRemoteModule('general', './mf').then((m) => m.routes),
  },
];
