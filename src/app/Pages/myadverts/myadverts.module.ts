import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyadvertsPageRoutingModule } from './myadverts-routing.module';

import { MyadvertsPage } from './myadverts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyadvertsPageRoutingModule
  ],
  declarations: [MyadvertsPage]
})
export class MyadvertsPageModule {}
