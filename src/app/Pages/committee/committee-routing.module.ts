import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitteePage } from './committee.page';

const routes: Routes = [
  {
    path: '',
    component: CommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommitteePageRoutingModule {}
