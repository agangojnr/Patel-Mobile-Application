import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MybusinessesPageRoutingModule } from './mybusinesses-routing.module';

import { MybusinessesPage } from './mybusinesses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MybusinessesPageRoutingModule
  ],
  declarations: [MybusinessesPage]
})
export class MybusinessesPageModule {}
