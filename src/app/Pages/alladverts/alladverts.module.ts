import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlladvertsPageRoutingModule } from './alladverts-routing.module';

import { AlladvertsPage } from './alladverts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlladvertsPageRoutingModule
  ],
  declarations: [AlladvertsPage]
})
export class AlladvertsPageModule {}
