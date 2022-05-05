import { NavController } from '@ionic/angular';
import { UtilService } from './../../services/util.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.page.html',
  styleUrls: ['./addjob.page.scss'],
})
export class AddjobPage implements OnInit {
  jobtitles: any = [];
  err: any = {};
  data: any = [];
  myDate:string;
  constructor(
    private api:ApiService,
    private datePicker: DatePicker,
    private util:UtilService,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    this.getUserDate();
  }

  getUserDate() { //console.log(this.api.member_id);
    this.api.getDataWithToken("jobTitle").subscribe(
      (res: any) => {
        //console.log(res.data.mbrlistData);
        this.jobtitles = res.data.titleData;           
      },
      (err) => {
        this.err = err.error.errors;
      }
    );
}


doSaveJob(){  
  let jobs: any = {};
  jobs.companyname =  this.data.companyname;
  jobs.titleid =  this.data.titleid;
  jobs.requirements =  this.data.requirements;
  jobs.qualification =  this.data.qualification;
  jobs.experience =  this.data.experience;
  jobs.vacancy =  this.data.vacancy;
  jobs.applndeadline =  this.data.applndeadline;
  jobs.contact =  this.data.contact;
  jobs.email =  this.data.email;
    
  this.util.startLoad();
  this.api.postDataWithToken("addJob", jobs).subscribe(
    (res: any) => { console.log(res.job);
      if (res.job) { 
        this.util.dismissLoader();
        this.util.presentToast("Job Submitted Successfully.");
        //this.api.bookid = res.data;
       this.navCtrl.navigateForward("/my-jobs");
      }
    },
    (err) => {
      this.util.dismissLoader();
      this.err = err.error.errors;
    }
  );
}

portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    //console.log('port:', event.value);
  }


  showDatepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText:"Save Date",
      todayText:"Set Today"
    }).then(
      date => {
        this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  } 

}
