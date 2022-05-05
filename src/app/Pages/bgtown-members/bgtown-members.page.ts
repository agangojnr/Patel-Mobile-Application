import { NavController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bgtown-members',
  templateUrl: './bgtown-members.page.html',
  styleUrls: ['./bgtown-members.page.scss'],
})
export class BgtownMembersPage implements OnInit {
  data: any = [];
  err: any = {};

  constructor(
    private api: ApiService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.getUserDate();
  }

  getUserDate(event?) {
    this.api.getDataWithToken("getbgtownmembers/"+ this.api.bloodgroup+"/"+this.api.town_id).subscribe(
      (res: any) => {
        //console.log(res.membersData);
        this.data = res.membersData;
        if(event){
          event.target.complete();
        } 
      },
      (err) => {
        this.err = err.error.errors;
      }
    );
}

viewFamily(user_id){
  this.api.user_id = user_id;
  //console.log(user_id);
this.navCtrl.navigateRoot("/other-family-info");
}

loadMore(event){
  this.getUserDate(event);
}

}
