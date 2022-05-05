import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloodgroupTownPageRoutingModule } from './bloodgroup-town-routing.module';

import { BloodgroupTownPage } from './bloodgroup-town.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloodgroupTownPageRoutingModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule,
  ],
  declarations: [BloodgroupTownPage]
})
export class BloodgroupTownPageModule {}
