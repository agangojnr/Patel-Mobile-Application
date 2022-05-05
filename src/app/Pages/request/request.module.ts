import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPageRoutingModule } from './request-routing.module';

import { RequestPage } from './request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPageRoutingModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule
  ],
  declarations: [RequestPage]
})
export class RequestPageModule {}
