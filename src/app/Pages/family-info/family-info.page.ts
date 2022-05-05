import { Component, OnInit } from '@angular/core';
import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.page.html',
  styleUrls: ['./family-info.page.scss'],
})
export class FamilyInfoPage implements OnInit {
 data: any = {};
  err: any = {};

  constructor(
  	private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService
  	) {
  	this.getUserDate();
  	 }

  ngOnInit() {
  }

   getUserDate() {
     
    this.util.isUpdateProfile.subscribe((s) => {


      if (!s) {
        this.util.startLoad();
      }

      this.api.getDataWithToken("relativeDetailData/"+ this.api.user_id).subscribe(
        (res: any) => {
          

          this.data =res.data;

          if (!s) {
            this.util.dismissLoader();
          }
        },
        (err) => {
          if (!s) {
            this.util.dismissLoader();
          }
          this.err = err.error.errors;
        }
      );
    });
  }

}
