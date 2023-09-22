import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FincarreraconductorPage } from './fincarreraconductor.page';

const routes: Routes = [
  {
    path: '',
    component: FincarreraconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FincarreraconductorPageRoutingModule {}
