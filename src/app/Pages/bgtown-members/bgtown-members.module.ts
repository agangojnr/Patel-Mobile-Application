import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BgtownMembersPageRoutingModule } from './bgtown-members-routing.module';

import { BgtownMembersPage } from './bgtown-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BgtownMembersPageRoutingModule,
    Ng2FilterPipeModule,
    Ng2SearchPipeModule
  ],
  declarations: [BgtownMembersPage]
})
export class BgtownMembersPageModule {}
