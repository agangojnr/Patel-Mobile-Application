import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRelativePageRoutingModule } from './add-relative-routing.module';

import { AddRelativePage } from './add-relative.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRelativePageRoutingModule
  ],
  declarations: [AddRelativePage]
})
export class AddRelativePageModule {}
