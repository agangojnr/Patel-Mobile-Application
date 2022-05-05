import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { SortModal1Page } from "../sort-modal1/sort-modal1.page";
import { SortModal2Page } from "../sort-modal2/sort-modal2.page";

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.page.html',
  styleUrls: ['./my-jobs.page.scss'],
})
export class MyJobsPage implements OnInit {
  type: any = "";
  typeid: any = "";
    sortType: any;
    data: any = [];
    err: any = {};
     catgoryName: any;
  
     genderFilter: any = { bus_job_cat_id: 0 };
    constructor(
      private navCtrl: NavController,
       private modalCtrl: ModalController,
      private api: ApiService,
      private util: UtilService) {
  
      this.getUserDate();
       }
  
         ionViewWillEnter() {
         if (localStorage.getItem("sort")) {
        this.sortType = localStorage.getItem("sort");
        
      } else {
        localStorage.setItem("sort", "Newest");
        this.sortType = "Newest";
      }
      //this.genderFilterFunc();
    }
  
    ngOnInit() {
    }
  
  
    
  
    getUserDate() {  
      this.api.getDataWithToken("myjobData").subscribe(
        (res: any) => { //console.log(res.jobs);
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
   
  

  addjob(){
    this.navCtrl.navigateForward("/addjob");   
  }

}
