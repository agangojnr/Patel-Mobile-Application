import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MybusinessesPage } from './mybusinesses.page';

const routes: Routes = [
  {
    path: '',
    component: MybusinessesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MybusinessesPageRoutingModule {}
