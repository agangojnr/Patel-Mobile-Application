import { Component, OnInit } from '@angular/core';
import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.page.html',
  styleUrls: ['./business-list.page.scss'],
})
export class BusinessListPage implements OnInit {

  clinic = [
    {
      img : 'assets/imgs/search/1.jpg',
      name : 'Pets Care Clinic',
      km : '2.4'
    },
    {
      img : 'assets/imgs/search/2.jpg',
      name : 'Emergency Hospital',
      km : '3.4'
    },
    {
      img : 'assets/imgs/search/3.jpg',
      name : 'New Dental Care',
      km : '4.0'
    },
    {
      img : 'assets/imgs/search/4.jpg',
      name : 'Parivar Health Center',
      km : '2.0'
    },
    {
      img : 'assets/imgs/search/5.jpg',
      name : 'Sahyog Hostipal',
      km : '1.5'
    },
    {
      img : 'assets/imgs/search/6.jpg',
      name : 'Parivar Clinic',
      km : '2.4'
    }
  ];
  data: any = [];
  err: any = {};

  catgoryName: any;

  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService) {
      this.catgoryName=this.api.business_category_name;

      this.util.startLoad();
      this.api.getDataWithToken("businesslist/"+this.api.business_category_id).subscribe(
        (res: any) => {
          if (res.success) { //console.log(res.data);
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

  myBusinesses(){
    this.navCtrl.navigateRoot("/mybusinesses");
  }

}
