import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GananciaconductorPageRoutingModule } from './gananciaconductor-routing.module';

import { GananciaconductorPage } from './gananciaconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GananciaconductorPageRoutingModule
  ],
  declarations: [GananciaconductorPage]
})
export class GananciaconductorPageModule {}
