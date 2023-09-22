import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ModalComponent} from '../components/modal/modal.component';

@Component({
  selector: 'app-homeconductor',
  templateUrl: './homeconductor.page.html',
  styleUrls: ['./homeconductor.page.scss'],
})
export class HomeconductorPage implements OnInit {

  constructor(private modalController: ModalController) {}

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
