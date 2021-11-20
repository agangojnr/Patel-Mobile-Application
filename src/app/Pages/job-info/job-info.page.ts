import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { SortModal1Page } from "../sort-modal1/sort-modal1.page";
import { SortModal2Page } from "../sort-modal2/sort-modal2.page";

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.page.html',
  styleUrls: ['./job-info.page.scss'],
})
export class JobInfoPage implements OnInit {
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
   // this.util.startLoad();
     }

       ionViewWillEnter() {

       	 //console.log("this.category: ", localStorage.getItem("genderFilter"));
    /*if (localStorage.getItem("genderFilter")) {
      this.type = localStorage.getItem("genderFilter");
      this.typeid = localStorage.getItem("catFilter");

      
    } else {

      localStorage.setItem("genderFilter", "All Categories");
      this.type = "All Categories";
    }*/
 
       if (localStorage.getItem("sort")) {
      this.sortType = localStorage.getItem("sort");
      
    } else {
      localStorage.setItem("sort", "Newest");
      this.sortType = "Newest";
    }
    //this.genderFilterFunc();
  }


  /*genderFilterFunc() {
 //console.log(this.typeid);
       
 if (this.type == "All Categories") {
      this.genderFilter.bus_job_cat_id = "";
    } else {
      this.genderFilter.bus_job_cat_id = this.typeid;
    }

  }*/
  doRefresh(event) {
   
    this.api.getDataWithToken("jobData" ).subscribe(
      (res: any) => {
        if (res.success) {
          this.data = res.data;
          //console.log(this.data);
          event.target.complete();
        }
      },
      (err) => {
        event.target.complete();
      }
    );
  }

  ngOnInit() {
  }


  filterSort() {
    let info: any;
    
     if (this.sortType == "Newest") {
      info = 1;
    } else {
      info = 2;
    }

    //this.util.startLoad();
    this.api.getDataWithToken("FilterCategoryInfo/" + info).subscribe(
      (res: any) => {
        //console.log("res: ", res);
        if (res.success) {
         // this.util.dismissLoader();
          this.data = res.data;
        }
      },
      (err) => {
        //this.util.dismissLoader();
      }
    );
    //console.log(info);
  }

  getUserDate() {


     //this.util.startLoad();
    this.api.getDataWithToken("jobData").subscribe(
      (res: any) => {
        if (res.success) {
         // this.util.dismissLoader();
          this.data = res.data;
          //console.log("this.data: ", this.data);
        }
      },
      (err) => {
        //this.util.dismissLoader();
        this.err = err.error.errors;
      }
    );
  }
  async presentTopratedModal() {
    const modal = await this.modalCtrl.create({
      component: SortModal1Page,
      backdropDismiss: false,
      cssClass: "sort-modal",
    });
    modal.onDidDismiss().then((data) => {
      //console.log("data", data);
      this.sortType = data.data;
      if (data["data"] != undefined) {
        //this.genderFilter.for_who = ;
        //this.rdata = data.data;
        this.filterSort();
      }
    });
    return await modal.present();
  }


    async presentCategoryModal() {
    const modal = await this.modalCtrl.create({
      component: SortModal2Page,
      backdropDismiss: false,
      cssClass: "sort-modal1",
      componentProps: {
      //'county_id': this.api.id
      //'lastName': 'Adams',
      //'middleInitial': 'N'
    },
    });
    modal.onDidDismiss().then((data) => {
      this.typeid = data.data;
      //console.log(" this.type: ", this.type);
     if (data["data"] != undefined) {
       //this.genderFilterFunc();
      }
    });
    return await modal.present();
  }

  

  viewJob(job_id){
      this.api.job_id = job_id;
    
      //console.log(user_id);
    this.navCtrl.navigateRoot("/job-details");
  }


}
