import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionconductorPageRoutingModule } from './confirmacionconductor-routing.module';

import { ConfirmacionconductorPage } from './confirmacionconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionconductorPageRoutingModule
  ],
  declarations: [ConfirmacionconductorPage]
})
export class ConfirmacionconductorPageModule {}
