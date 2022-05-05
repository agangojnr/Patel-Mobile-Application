import { ApiService } from './../../services/api.service';
import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-committee',
  templateUrl: './committee.page.html',
  styleUrls: ['./committee.page.scss'],
})
export class CommitteePage implements OnInit {
  data : any = [];
  err: any = {};
  constructor(
    private util:UtilService,
    private api:ApiService,
  ) { 
    this.util.startLoad();
    this.api.getDataWithToken("allcommittes").subscribe(
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

}
