import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-other-family-info',
  templateUrl: './other-family-info.page.html',
  styleUrls: ['./other-family-info.page.scss'],
})
export class OtherFamilyInfoPage implements OnInit {
 data: any = {};
  err: any = {};
  constructor(
  	private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService) { 

  }

  ngOnInit() {
 //this.util.startLoad();
  	  	this.getUserDate();
  }

  getUserDate() {
     
    //this.util.isUpdateProfile.subscribe((s) => {


      /*if (!s) {
        this.util.startLoad();
      }*/

      this.api.getDataWithToken("familyInfoDetailData/"+ this.api.user_id).subscribe(
        (res: any) => {
          

          this.data =res.data;

          /*if (!s) {
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

   viewRelative(member_id) {
   	  this.api.member_id = member_id;
    this.navCtrl.navigateForward("/view-other-family");
  }

}
