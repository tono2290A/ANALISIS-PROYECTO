import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio').then(m => m.InicioComponent)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros').then(m => m.NosotrosComponent)
  },
  {
    path: 'lineas-produccion',
    loadComponent: () => import('./pages/lineas-produccion/lineas-produccion').then(m => m.LineasProduccionComponent)
  },
  {
    path: 'contactenos',
    loadComponent: () => import('./pages/contactenos/contactenos').then(m => m.ContactenosComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent)
  },
   // dashboard con subrutas
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardComponent),
    children: [
      { path: 'diseno', loadComponent: () => import('./pages/dashboard/pages/diseno/diseno').then(m => m.DisenoComponent) },
      { path: 'proveedores', loadComponent: () => import('./pages/dashboard/pages/proveedores/proveedores').then(m => m.ProveedoresComponent) },
      { path: 'materiales', loadComponent: () => import('./pages/dashboard/pages/materiales/materiales').then(m => m.MaterialesComponent) },
      { path: 'montaje', loadComponent: () => import('./pages/dashboard/pages/montaje/montaje').then(m => m.MontajeComponent) },
      { path: 'calidad', loadComponent: () => import('./pages/dashboard/pages/calidad/calidad').then(m => m.CalidadComponent) },
      { path: 'embalaje', loadComponent: () => import('./pages/dashboard/pages/embalaje/embalaje').then(m => m.EmbalajeComponent) },
      { path: 'usuarios', loadComponent: () => import('./pages/dashboard/pages/usuarios/usuarios').then(m => m.UsuariosComponent) },
      { path: 'reportes', loadComponent: () => import('./pages/dashboard/pages/reportes/reportes').then(m => m.ReportesComponent) },
    ]
  },
  { path: '**', redirectTo: 'inicio' }
];
