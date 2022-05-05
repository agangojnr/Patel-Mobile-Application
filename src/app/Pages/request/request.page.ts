import { ApiService } from './../../services/api.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  data: any = [];
  err: any = {};

  constructor(
    private api:ApiService,
    private navCtrl: NavController,
  ) { 
    this.getUserDate();
  }

  ngOnInit() {
    
  }

  getUserDate(event?) { //console.log(this.api.member_id);
    this.api.getDataWithToken("memberrequest").subscribe(
      (res: any) => {
        this.data = res.reqData;  
        if(event){
          event.target.complete();
        }     
      },
      (err) => {
        this.err = err.error.errors;
      }
    );
}
  
  addrequest(){
    this.navCtrl.navigateForward("/add-request");   
  }

  loadMore(event){
    this.getUserDate(event);
  }
}
