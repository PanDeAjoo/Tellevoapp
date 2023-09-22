import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrayectomenuPageRoutingModule } from './trayectomenu-routing.module';

import { TrayectomenuPage } from './trayectomenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrayectomenuPageRoutingModule
  ],
  declarations: [TrayectomenuPage]
})
export class TrayectomenuPageModule {}
