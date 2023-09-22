import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FincarreraPageRoutingModule } from './fincarrera-routing.module';

import { FincarreraPage } from './fincarrera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FincarreraPageRoutingModule
  ],
  declarations: [FincarreraPage]
})
export class FincarreraPageModule {}
