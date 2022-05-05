
import { Component, OnInit } from '@angular/core';
import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { NavController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { MatrifilterComponent } from "../../Component/matrifilter/matrifilter.component";



@Component({
  selector: 'app-matrimonial',
  templateUrl: './matrimonial.page.html',
  styleUrls: ['./matrimonial.page.scss'],
})
export class MatrimonialPage implements OnInit {
	  data: any = [];
    matri:any;
    err: any = {};

    ages:any = [];
    native: any = [];
    countries: any = [];
    modaldata: any;

   catgoryName: any;

  constructor( 
  	private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService,
    private modalctrl: ModalController,
    ) {
  		
     }

    

    
  ngOnInit() {
    this.ages = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,68,69,70,71,72,73,74,75]; 
    this.getUserDate();
  }
    getUserDate() {
      this.api.getDataWithToken("matrimonialmembers").subscribe(
        (res: any) => { //console.log(res.data.matrimonialmbrs);
          this.data = res.data.matrimonialmbrs;
          this.matri = res.data.matrimonial;
        },
        (err) => {
          this.err = err.error.errors;
        }
      );

      this.api.getDataWithToken("memberlist").subscribe(
        (res: any) => {
          //console.log(res.data.mbrlistData);
          this.native = res.data.native; 
          this.countries = res.data.countries;   
             
        },
        (err) => {
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

  addtoMatromonial(){
    this.api.getDataWithToken("addmatimonial").subscribe(
      (res: any) => { 
        this.data = res.data;
      },
      (err) => {
        this.err = err.error.errors;
      }
    );
  }

  removefromMatromonial(){
    this.api.getDataWithToken("removematimonial").subscribe(
      (res: any) => { 
        this.data = res.data;
      },
      (err) => {
        this.err = err.error.errors;
      }
    );
  }

  async _openModal(){
    const modal = await this.modalctrl.create({
      component: MatrifilterComponent,
      componentProps: {
        'countries': this.countries,
        'native': this.native,
        'ages': this.ages,
      },
      cssClass:"matrifilterclass",
      swipeToClose:true,
    })
   
  

    modal.onDidDismiss().then((modalDataResponse)=>{
      if (modalDataResponse.data.ddata !== null) {
        this.modaldata = modalDataResponse;
        console.log(modalDataResponse.data.ddata);
      }
    }); 

    return await modal.present();
  }
  
}
