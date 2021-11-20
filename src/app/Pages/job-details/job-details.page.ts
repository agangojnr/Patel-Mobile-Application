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
      (res: any) => {
        if (res.success) {
          this.util.dismissLoader();
          this.data = res.data;
          //console.log(this.data);
          //this.subcounty=this.data.get_sub_counties;

          //this.data.start_time = this.transform(this.data.start_time);
          //this.data.end_time = this.transform(this.data.end_time);
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
