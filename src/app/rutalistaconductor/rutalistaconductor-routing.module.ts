import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutalistaconductorPage } from './rutalistaconductor.page';

const routes: Routes = [
  {
    path: '',
    component: RutalistaconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutalistaconductorPageRoutingModule {}
