import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatrimonialPageRoutingModule } from './matrimonial-routing.module';
import { MatrifilterComponent } from "../../Component/matrifilter/matrifilter.component";

import { MatrimonialPage } from './matrimonial.page';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2FilterPipeModule } from "ng2-filter-pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatrimonialPageRoutingModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule,
  ],
  declarations: [
    MatrimonialPage,
  ]
})
export class MatrimonialPageModule {}
