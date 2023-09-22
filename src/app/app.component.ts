import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [ //RAID QUE CONTIENE LOS ATAJES DEL FOLDER O MENU LATERAL//
    { title: 'INICIO', url: '/home', icon: 'construct' },
    { title: 'INICIO CONCUCTOR', url: '/homeconductor', icon:'construct'},
    { title: 'CUENTA PASAJERO', url: '/pasajero', icon: 'construct'},
    { title: 'CUENTA CONDUCTOR', url: '/conductor', icon: 'construct' },
    { title: 'TU VIAJE', url: '/ruta', icon: 'construct' },
    { title: 'CERRAR SESION', url: '/splash', icon: 'construct' },

  ];
}
