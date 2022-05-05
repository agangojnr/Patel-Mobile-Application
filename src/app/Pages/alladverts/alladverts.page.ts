import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";

@Component({
  selector: 'app-alladverts',
  templateUrl: './alladverts.page.html',
  styleUrls: ['./alladverts.page.scss'], 
})
export class AlladvertsPage implements OnInit {
  data: any = [];
  err: any = {};

  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService,
  ) { 

    this.util.startLoad();
      this.api.getDataWithToken("allAdverts").subscribe(
        (res: any) => { 
          if (res.success) {
            this.util.dismissLoader();
            this.data = res.data.result; 
          }
        },
        (err) => {
          this.util.dismissLoader();
          this.err = err.error.errors;
        }
      );

  }

  ngOnInit() {
  }

  myAdverts(){
  this.navCtrl.navigateRoot("/myadverts");
  }

  goToAdDetails(id){
    this.api.ad_id = id;
    this.navCtrl.navigateForward("/ad-details"); 
  }

}
