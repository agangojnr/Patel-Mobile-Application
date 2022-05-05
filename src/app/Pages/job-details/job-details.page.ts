import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
 data: any = {};
  err: any = {};
  constructor(
  	private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService) { 
  	this.util.startLoad();
    this.api.getDataWithToken("jobDetailsInfo/" + this.api.job_id).subscribe(
      (res: any) => { //console.log(res.data);
        if (res.success) {
          this.util.dismissLoader();
          this.data = res.data;
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
