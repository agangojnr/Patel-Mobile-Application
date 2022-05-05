import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherFamilyPageRoutingModule } from './other-family-routing.module';

import { OtherFamilyPage } from './other-family.page';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherFamilyPageRoutingModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule,
  ],
  declarations: [OtherFamilyPage]
})
export class OtherFamilyPageModule {}
