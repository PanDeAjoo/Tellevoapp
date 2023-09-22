import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutalistaPageRoutingModule } from './rutalista-routing.module';

import { RutalistaPage } from './rutalista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutalistaPageRoutingModule
  ],
  declarations: [RutalistaPage]
})
export class RutalistaPageModule {}
