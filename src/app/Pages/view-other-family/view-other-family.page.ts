import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-view-other-family',
  templateUrl: './view-other-family.page.html',
  styleUrls: ['./view-other-family.page.scss'],
})
export class ViewOtherFamilyPage implements OnInit {
  data: any = [];
  err: any = {};
  constructor(
  	private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService) { 
  	 this.util.startLoad();
  	 console.log(this.api.member_id);
    this.api.getDataWithToken("otherFamilyData/"+ this.api.member_id).subscribe(
      (res: any) => {
        if (res.success) {
          this.util.dismissLoader();
          this.data = res.data;
         // console.log(this.data);
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

}
