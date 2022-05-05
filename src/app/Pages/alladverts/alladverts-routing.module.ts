import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlladvertsPage } from './alladverts.page';

const routes: Routes = [
  {
    path: '',
    component: AlladvertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlladvertsPageRoutingModule {}
