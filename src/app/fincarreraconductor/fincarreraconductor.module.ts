import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FincarreraconductorPageRoutingModule } from './fincarreraconductor-routing.module';

import { FincarreraconductorPage } from './fincarreraconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FincarreraconductorPageRoutingModule
  ],
  declarations: [FincarreraconductorPage]
})
export class FincarreraconductorPageModule {}
