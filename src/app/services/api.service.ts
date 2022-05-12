import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  baseUrl: any = environment.baseUrl;
  category: any;
  userToken: any;
  deviceToken: any;
  verifyMo: any;
  phone_no: any;
  id: any;
  bookid: any;
  branch_id: any;
  user_id: any;
  job_id:any;
  ad_id:any;
  usertype:any;
  ages:any = [];
  job_title:any;
  member_id:any;
  total:any;
  time: any = {};
  bloodgroup: any;
  town_id: any;
  town_name: any;
  business_category_id:any;
  business_category_name:any;
  imageUrl = "http://travellingtaphouse.co.ke/patel/public/app_images";
  loc_imageUrl = "images/";
  constructor(private http: HttpClient) {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    }
  }
  getData(url) {
    return this.http.get(this.baseUrl + url);
  }
  postData(url, data) {
   // console.log("jjj");
    return this.http.post(this.baseUrl + url, data);
  }

  getDataWithToken(url) {

    let header = new HttpHeaders();
    header = header.set("Authorization", "Bearer " + this.userToken);
    console.log(header);
    header = header.set("Accept", "application/json");
     header = header.set('Content-Type','application/json');

      // console.log(this.userToken);
    return this.http.get(this.baseUrl + url, { headers: header });
  }

  postDataWithToken(url, data) {
    let header = new HttpHeaders();
    header = header.set("Authorization", "Bearer " + this.userToken);
    header = header.set("Accept", "application/json");
    return this.http.post(this.baseUrl + url, data, { headers: header });
  }
}
