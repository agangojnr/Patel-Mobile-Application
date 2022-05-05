import { NavController } from '@ionic/angular';
import { ApiService } from './../../services/api.service';
import { SortModal1Page } from './../sort-modal1/sort-modal1.page';
import { UtilService } from './../../services/util.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.page.html',
  styleUrls: ['./receipe.page.scss'],
})
export class ReceipePage implements OnInit {
  
  data: any = [];
  err: any = {};
   catgoryName: any;

  constructor(
    private api: ApiService,
    private navCtrl: NavController
  ) { 
    this.getUserDate();
  }

  ngOnInit() {
  //console.log(localStorage.getItem('token'));
  }

  getUserDate(event?) {
      this.api.getDataWithToken("recipelist").subscribe(
        (res: any) => {
          this.data = res.recipeData;
          if(event){
            event.target.complete();
          } 
        },
        (err) => {
          this.err = err.error.errors;
        }
      );
  }
  

  recipedetails(id){
    this.api.id = id;
    this.navCtrl.navigateForward("/recipe-details");   
  }

  addrecipe(){
    this.navCtrl.navigateForward("/add-recipe");   
  }

  loadMore(event){
    this.getUserDate(event);
  }

}
