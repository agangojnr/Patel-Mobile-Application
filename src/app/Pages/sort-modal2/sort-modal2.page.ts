import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiService } from "./../../services/api.service";
//import { NavParams } from '@ionic/angular';


@Component({
  selector: "app-sort-modal2",
  templateUrl: "./sort-modal2.page.html",
  styleUrls: ["./sort-modal2.page.scss"],
})
export class SortModal2Page implements OnInit {
  data: any = [];
  err: any = {};
  category = "";

  constructor(private modalCtrl: ModalController,
    private api: ApiService,
    //public navParams: NavParams
    ) {
    //const county_id=navParams.get('county_id');
 

     this.api.getDataWithToken("busjobcat").subscribe(
      (res: any) => {
        if (res.success) {
          
          this.data = res.data;

         console.log("data", this.data);
        }
      },
      (err) => {
       
        this.err = err.error.errors;
      }
    );


  }

  ionViewWillEnter() {
    this.category = localStorage.getItem("genderFilter");
 
  }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  filter(val,val2) {
  console.log("this.category: ", val);
    localStorage.setItem("genderFilter", val);
    localStorage.setItem("catFilter", val2);
    this.modalCtrl.dismiss(val2);
  }
}
