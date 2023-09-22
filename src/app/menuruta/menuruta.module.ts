import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenurutaPageRoutingModule } from './menuruta-routing.module';

import { MenurutaPage } from './menuruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenurutaPageRoutingModule
  ],
  declarations: [MenurutaPage]
})
export class MenurutaPageModule {}
