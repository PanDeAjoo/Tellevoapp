import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenurutaPage } from './menuruta.page';

const routes: Routes = [
  {
    path: '',
    component: MenurutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenurutaPageRoutingModule {}
