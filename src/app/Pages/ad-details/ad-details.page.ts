import { UtilService } from './../../services/util.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.page.html',
  styleUrls: ['./ad-details.page.scss'],
})
export class AdDetailsPage implements OnInit {
  data : any = [];
  err: any = {};
  constructor(
    private api: ApiService,
    private util:UtilService,
  ) { 
    this.util.startLoad(); 
    this.api.getDataWithToken("addetails/" + this.api.ad_id).subscribe(
      (res: any) => { 
        if (res.success) {  //console.log(res.data.result);
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

}
