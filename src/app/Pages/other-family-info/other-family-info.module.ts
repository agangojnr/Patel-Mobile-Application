import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherFamilyInfoPageRoutingModule } from './other-family-info-routing.module';

import { OtherFamilyInfoPage } from './other-family-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherFamilyInfoPageRoutingModule
  ],
  declarations: [OtherFamilyInfoPage]
})
export class OtherFamilyInfoPageModule {}
