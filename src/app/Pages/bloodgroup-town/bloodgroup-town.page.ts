import { NavController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloodgroup-town',
  templateUrl: './bloodgroup-town.page.html',
  styleUrls: ['./bloodgroup-town.page.scss'],
})
export class BloodgroupTownPage implements OnInit {
  data: any = [];
  err: any = {};
  constructor(
    private api: ApiService,
    private navCtrl: NavController,
  ) { 
    this.getUserDate();
  }

  ngOnInit() {
    
  }

  getUserDate(event?) {
      this.api.getDataWithToken("getbloodgrouptown/"+ this.api.bloodgroup).subscribe(
        (res: any) => {
          this.data = res.bgData;
          if(event){
            event.target.complete();
          }  
        },
        (err) => {
          this.err = err.error.errors;
        }
      );
  }

  bgtownmembers(town_id,town_name){
    this.api.town_id = town_id;
    this.api.town_name = town_name;
   this.navCtrl.navigateForward("/bgtown-members"); 
  }

  loadMore(event){
    this.getUserDate(event);
  }

}
