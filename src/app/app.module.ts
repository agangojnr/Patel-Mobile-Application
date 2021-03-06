import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { PayPal } from "@ionic-native/paypal/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { DatePicker } from '@ionic-native/date-picker/ngx';
import {IonMarqueeModule} from "ionic-marquee";
import { IonicSelectableModule } from 'ionic-selectable';
import { MatrifilterComponent } from "../app/Component/matrifilter/matrifilter.component";
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from "@ionic-native/native-geocoder/ngx";
import { Stripe } from "@ionic-native/stripe/ngx";
@NgModule({
  declarations: [
    AppComponent,
    MatrifilterComponent
  ],
  entryComponents: [
    MatrifilterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
    }),
    AppRoutingModule,
    HttpClientModule,
    IonicSelectableModule,  
    IonMarqueeModule,
      
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PayPal,
    Stripe,
    Camera,
    Geolocation,
    NativeGeocoder,
    OneSignal,
    DatePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
