import { NavController } from '@ionic/angular';
import { UtilService } from './../../services/util.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybusinesses',
  templateUrl: './mybusinesses.page.html',
  styleUrls: ['./mybusinesses.page.scss'],
})


export class MybusinessesPage implements OnInit {
  data: any = [];
  err: any = {};

  constructor(
    private api: ApiService,
    private util:UtilService,
    private navCtrl: NavController,
  ) { 


      this.util.startLoad();
      this.api.getDataWithToken("myBusinesses/" ).subscribe(
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

  addbusiness(){
    this.navCtrl.navigateForward("/add-business");   
  }

}
