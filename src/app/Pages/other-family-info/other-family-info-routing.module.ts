import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherFamilyInfoPage } from './other-family-info.page';

const routes: Routes = [
  {
    path: '',
    component: OtherFamilyInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherFamilyInfoPageRoutingModule {}
