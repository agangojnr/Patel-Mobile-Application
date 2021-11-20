import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyInfoPageRoutingModule } from './family-info-routing.module';

import { FamilyInfoPage } from './family-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyInfoPageRoutingModule
  ],
  declarations: [FamilyInfoPage]
})
export class FamilyInfoPageModule {}
