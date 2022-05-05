import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BgtownMembersPage } from './bgtown-members.page';

const routes: Routes = [
  {
    path: '',
    component: BgtownMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BgtownMembersPageRoutingModule {}
