import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherFamilyPage } from './other-family.page';

const routes: Routes = [
  {
    path: '',
    component: OtherFamilyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherFamilyPageRoutingModule {}
