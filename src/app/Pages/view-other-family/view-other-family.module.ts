import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOtherFamilyPageRoutingModule } from './view-other-family-routing.module';

import { ViewOtherFamilyPage } from './view-other-family.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewOtherFamilyPageRoutingModule
  ],
  declarations: [ViewOtherFamilyPage]
})
export class ViewOtherFamilyPageModule {}
