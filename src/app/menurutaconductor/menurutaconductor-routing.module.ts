import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenurutaconductorPage } from './menurutaconductor.page';

const routes: Routes = [
  {
    path: '',
    component: MenurutaconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenurutaconductorPageRoutingModule {}
