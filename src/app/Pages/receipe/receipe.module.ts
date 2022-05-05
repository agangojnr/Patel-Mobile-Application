import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipePageRoutingModule } from './receipe-routing.module';

import { ReceipePage } from './receipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipePageRoutingModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule,
  ],
  declarations: [ReceipePage]
})
export class ReceipePageModule {}
