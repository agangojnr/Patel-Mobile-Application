import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloodgroupTownPage } from './bloodgroup-town.page';

const routes: Routes = [
  {
    path: '',
    component: BloodgroupTownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodgroupTownPageRoutingModule {}
