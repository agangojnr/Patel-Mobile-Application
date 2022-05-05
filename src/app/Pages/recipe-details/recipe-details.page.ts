import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  data: any = {};
  err: any = {};

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.getUserDate();
  }

  getUserDate() {
      this.api.getDataWithToken("recipedetails/"+ this.api.id).subscribe(
        (res: any) => {
          this.data = res.recipeData[0];
        },
        (err) => {
          this.err = err.error.errors;
        }
      );
  }

}
