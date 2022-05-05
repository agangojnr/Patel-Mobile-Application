import { Data } from '@angular/router';
import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  data: any = {};
  datarun: any;
  rdata: any = {};
  err: any = {};

  

  sliders = [
    '../../assets/imgs/10.jpg',
    '../../assets/imgs/11.jpg',
    '../../assets/imgs/14.jpg',
  ];

  horizontalText = "marque text";

  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService
  ) {
    this.getUserDate();
    //this.util.startLoad();
    this.api.getDataWithToken("deals").subscribe( 
      (res: any) => { 
        if (res.success) {           
          this.data = res.data; 
        }
      },
      (err) => {
        //this.util.dismissLoader();
        this.err = err.error.errors;
      }
    );
  }

  ngOnInit() {

    setTimeout(() => {
      this.horizontalText = "";

    }, 3000);
    

  }


  viewList(id) {
    this.api.id = id.id;
    this.api.category = id.name;
    this.navCtrl.navigateForward("/salon-list");
  }
  getUserDate() {

      this.api.getDataWithToken("profile").subscribe(
        (res: any) => {
          this.rdata = res;
        },
        (err) => {
          this.err = err.error.errors;
        }
      );
   //});
  }
  viewSlonDetail(id) {
    this.api.id = id;
    this.navCtrl.navigateForward("/salon-detail");
  }

  doMyFamily() {
    this.navCtrl.navigateForward("/offer");
  }

  otherFamily() {
    this.navCtrl.navigateForward("/other-family");
  }
  viewJobs() {
    this.navCtrl.navigateForward("/job-info");
  }
   viewBusiness() {
    this.navCtrl.navigateForward("/business-info");
  }

   viewCommitee() {
    this.navCtrl.navigateForward("/committee");
  }

   viewMatrimonial() {
    this.navCtrl.navigateForward("/matrimonial");
  }

  
  recipelist(){
    this.navCtrl.navigateForward("/receipe");   
  }

  recipedetails(){
    this.navCtrl.navigateForward("/recipe-details");   
  }

  blooddonation(){
    this.navCtrl.navigateForward("/blood-donnation");   
  }

  application(){
    this.navCtrl.navigateForward("/application"); 
  }

  request(){
    this.navCtrl.navigateForward("/request"); 
  }

  communication(){
    this.navCtrl.navigateForward("/communication"); 
  }
  
  viewAllads(){
    this.navCtrl.navigateForward("/alladverts"); 
  }

  goToAdDetails(id){
    this.api.ad_id = id;
    this.navCtrl.navigateForward("/ad-details"); 
  }
  
}
