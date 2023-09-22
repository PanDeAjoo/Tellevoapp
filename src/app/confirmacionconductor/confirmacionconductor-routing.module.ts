import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionconductorPage } from './confirmacionconductor.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionconductorPageRoutingModule {}
