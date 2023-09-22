import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FincarreraPage } from './fincarrera.page';

const routes: Routes = [
  {
    path: '',
    component: FincarreraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FincarreraPageRoutingModule {}
