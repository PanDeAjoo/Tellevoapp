import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutalistaconductorPageRoutingModule } from './rutalistaconductor-routing.module';

import { RutalistaconductorPage } from './rutalistaconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutalistaconductorPageRoutingModule
  ],
  declarations: [RutalistaconductorPage]
})
export class RutalistaconductorPageModule {}
