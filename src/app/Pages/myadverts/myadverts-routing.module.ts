import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyadvertsPage } from './myadverts.page';

const routes: Routes = [
  {
    path: '',
    component: MyadvertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyadvertsPageRoutingModule {}
