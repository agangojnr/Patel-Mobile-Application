import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-other-family',
  templateUrl: './other-family.page.html',
  styleUrls: ['./other-family.page.scss'],
})
export class OtherFamilyPage implements OnInit {
   data: any = [];
  err: any = {};
   catgoryName: any;
   maximumpages=3;
  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService
  	) { 

  	this.getUserDate();
    //this.util.startLoad();

  }

  ngOnInit() {
  }



    getUserDate() {


    //this.util.isUpdateProfile.subscribe((s) => {
      /*if (!s) {
        this.util.startLoad();
      }*/
      this.util.startLoad();
      this.api.getDataWithToken("membersData").subscribe(
        (res: any) => {
         // this.data =res.data;
              // console.log(this.data );
              
               const sorted=  res.data.sort((a,b)=>{
                 if(a.firstname < b.firstname){ return -1; }
                 if(a.firstname > b.firstname){ return 1; }
                 return 0;

               });  

               let last=null;
               for(let i=0; i< sorted.length; i++){
                 const contact=sorted[i];

                 if(!last || last!=contact.firstname[0]){

                   last=contact.firstname[0];
                   this.data.push({key:last,users:[]});


                 }

                // console.log(this.data);
                 this.data[this.data.length-1].users.push(contact);

               }
               this.util.dismissLoader(); 
               console.log(this.data);

         /* if (!s) {
            this.util.dismissLoader();
          }*/


        },
        (err) => {
          this.util.dismissLoader();
          /*if (!s) {
            this.util.dismissLoader();
          }*/
          this.err = err.error.errors;
        }
      );
    //});
  }




   viewFamily(user_id){
      this.api.user_id = user_id;
      //console.log(user_id);
    this.navCtrl.navigateRoot("/other-family-info");
  }

 

}
