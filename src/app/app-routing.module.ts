import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
     path: 'home',
     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'register-select',
    loadChildren: () => import('./register-select/register-select.module').then( m => m.RegisterSelectPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'trayectomenu',
    loadChildren: () => import('./trayectomenu/trayectomenu.module').then( m => m.TrayectomenuPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'menuruta',
    loadChildren: () => import('./menuruta/menuruta.module').then( m => m.MenurutaPageModule)
  },
  {
    path: 'ruta',
    loadChildren: () => import('./ruta/ruta.module').then( m => m.RutaPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'rutalista',
    loadChildren: () => import('./rutalista/rutalista.module').then( m => m.RutalistaPageModule)
  },
  {
    path: 'homeconductor',
    loadChildren: () => import('./homeconductor/homeconductor.module').then( m => m.HomeconductorPageModule)
  },
  {
    path: 'menurutaconductor',
    loadChildren: () => import('./menurutaconductor/menurutaconductor.module').then( m => m.MenurutaconductorPageModule)
  },
  {
    path: 'recuperarpass',
    loadChildren: () => import('./recuperarpass/recuperarpass.module').then( m => m.RecuperarpassPageModule)
  },
  {
    path: 'confirmacionconductor',
    loadChildren: () => import('./confirmacionconductor/confirmacionconductor.module').then( m => m.ConfirmacionconductorPageModule)
  },
  {
    path: 'rutaconductor',
    loadChildren: () => import('./rutaconductor/rutaconductor.module').then( m => m.RutaconductorPageModule)
  },
  {
    path: 'rutalistaconductor',
    loadChildren: () => import('./rutalistaconductor/rutalistaconductor.module').then( m => m.RutalistaconductorPageModule)
  },
  {
    path: 'fincarrera',
    loadChildren: () => import('./fincarrera/fincarrera.module').then( m => m.FincarreraPageModule)
  },
  {
    path: 'fincarreraconductor',
    loadChildren: () => import('./fincarreraconductor/fincarreraconductor.module').then( m => m.FincarreraconductorPageModule)
  },
  {
    path: 'gananciaconductor',
    loadChildren: () => import('./gananciaconductor/gananciaconductor.module').then( m => m.GananciaconductorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
