import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodDonnationPageRoutingModule } from './blood-donnation-routing.module';

import { BloodDonnationPage } from './blood-donnation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodDonnationPageRoutingModule
  ],
  declarations: [BloodDonnationPage]
})
export class BloodDonnationPageModule {}
