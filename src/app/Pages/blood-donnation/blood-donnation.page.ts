import { NavController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-donnation',
  templateUrl: './blood-donnation.page.html',
  styleUrls: ['./blood-donnation.page.scss'],
})
export class BloodDonnationPage implements OnInit {
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

  getUserDate() {
    this.api.getDataWithToken("getbloodgroup").subscribe(
      (res: any) => {
        console.log(res.memberData);
        this.data = res.memberData;
      },
      (err) => {
        this.err = err.error.errors;
      }
    );
}

viewtown(bloodgroup){
  this.api.bloodgroup = bloodgroup;
  this.navCtrl.navigateForward("/bloodgroup-town"); 
}


}


//(click)="recipedetails(item?.id)"
