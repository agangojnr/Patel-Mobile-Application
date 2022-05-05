import { ApiService } from './../../services/api.service';
import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.page.html',
  styleUrls: ['./communication.page.scss'],
})
export class CommunicationPage implements OnInit {

  data: any = [];
  data1: any = [];
  err: any = {};
  constructor(
    private util:UtilService,
    private api:ApiService,
  ) { 
    this.util.startLoad();
    this.api.getDataWithToken("allInfos").subscribe(
      (res: any) => { 
        if (res.success) { //console.log(res.data.read);
          this.util.dismissLoader();
          this.data1 = res.data.unread; 
          this.data = res.data.read; 
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


  readinfo(id){
    this.util.startLoad();
    this.api.getDataWithToken("readinfo/"+id).subscribe(
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
}
