import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobInfoPageRoutingModule } from './job-info-routing.module';
import { SortModal1PageModule } from "../sort-modal1/sort-modal1.module";
import { SortModal2PageModule } from "../sort-modal2/sort-modal2.module";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";

import { JobInfoPage } from './job-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobInfoPageRoutingModule,
    SortModal1PageModule,
    SortModal2PageModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule,

  ],
  declarations: [JobInfoPage]
})
export class JobInfoPageModule {}
