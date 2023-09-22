import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenurutaconductorPageRoutingModule } from './menurutaconductor-routing.module';

import { MenurutaconductorPage } from './menurutaconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenurutaconductorPageRoutingModule
  ],
  declarations: [MenurutaconductorPage]
})
export class MenurutaconductorPageModule {}
