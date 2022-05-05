import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import {IonMarqueeModule} from "ionic-marquee";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    HomePageRoutingModule,
    IonMarqueeModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
