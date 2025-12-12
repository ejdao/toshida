import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'permisos',
    loadChildren: () => import('./permisos/routes').then((m) => m.routes),
  },
];
