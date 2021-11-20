import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessInfoPageRoutingModule } from './business-info-routing.module';

import { SortModal1PageModule } from "../sort-modal1/sort-modal1.module";
import { SortModal2PageModule } from "../sort-modal2/sort-modal2.module";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";

import { BusinessInfoPage } from './business-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessInfoPageRoutingModule,
    SortModal1PageModule,
    SortModal2PageModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule,
  ],
  declarations: [BusinessInfoPage]
})
export class BusinessInfoPageModule {}
