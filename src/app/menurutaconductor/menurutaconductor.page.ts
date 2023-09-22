import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-menurutaconductor',
  templateUrl: './menurutaconductor.page.html',
  styleUrls: ['./menurutaconductor.page.scss'],
})
export class MenurutaconductorPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  
  volverAtras() {
    this.navCtrl.back(); // Esta función navegará hacia atrás en la pila de navegación.
  }
  
  ngOnInit() {
  }

}
