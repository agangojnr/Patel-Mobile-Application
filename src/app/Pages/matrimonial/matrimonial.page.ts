import { Component, OnInit } from '@angular/core';
import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-matrimonial',
  templateUrl: './matrimonial.page.html',
  styleUrls: ['./matrimonial.page.scss'],
})
export class MatrimonialPage implements OnInit {
	  data: any = [];
  err: any = {};
   catgoryName: any;

  constructor( 
  	private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService) {
  		this.getUserDate();
     }

  ngOnInit() {
  }
    getUserDate() {


    //this.util.isUpdateProfile.subscribe((s) => {
      /*if (!s) {
        this.util.startLoad();
      }*/

      this.api.getDataWithToken("membersData").subscribe(
        (res: any) => {
          this.data =res.data;
               //console.log(this.data );

         /* if (!s) {
            this.util.dismissLoader();
          }*/
        },
        (err) => {
          /*if (!s) {
            this.util.dismissLoader();
          }*/
          this.err = err.error.errors;
        }
      );
    //});
  }

   viewFamily(user_id){
      this.api.user_id = user_id;
      //console.log(user_id);
    this.navCtrl.navigateRoot("/other-family-info");
  }
}
