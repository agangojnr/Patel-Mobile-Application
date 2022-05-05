import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodDonnationPage } from './blood-donnation.page';

const routes: Routes = [
  {
    path: '',
    component: BloodDonnationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodDonnationPageRoutingModule {}
