import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOtherFamilyPage } from './view-other-family.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOtherFamilyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOtherFamilyPageRoutingModule {}
