import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommitteePageRoutingModule } from './committee-routing.module';

import { CommitteePage } from './committee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommitteePageRoutingModule
  ],
  declarations: [CommitteePage]
})
export class CommitteePageModule {}
