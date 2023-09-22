import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GananciaconductorPage } from './gananciaconductor.page';

const routes: Routes = [
  {
    path: '',
    component: GananciaconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GananciaconductorPageRoutingModule {}
