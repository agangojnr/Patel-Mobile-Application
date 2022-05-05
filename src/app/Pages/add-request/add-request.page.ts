import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { UtilService } from './../../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.page.html',
  styleUrls: ['./add-request.page.scss'],
})
export class AddRequestPage implements OnInit {
  data: any = [];
  err: any = {};
  constructor(
    private util:UtilService,
    private api:ApiService,
    private navCtrl:NavController,
    private toastctrl:ToastController
  ) { }

  ngOnInit() {
  }

  doSaveRequest(){  
      let requ: any = {};
      requ.category =  this.data.category;
      requ.description =  this.data.description;     
      
      this.util.startLoad();
      this.api.postDataWithToken("addrequest", requ).subscribe(
        (res: any) => { 
          if (res.reqRes) { 
            this.util.dismissLoader();
            this.util.presentToast("Request Saved Successfully.");
            //this.api.bookid = res.data;
           this.navCtrl.navigateForward("/request");
         
          }
        },
        (err) => {
          this.util.dismissLoader();
          this.err = err.error.errors;
        }
      );
    
  }

  

}
