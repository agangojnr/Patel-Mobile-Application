import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { UtilService } from './../../services/util.service';
import { ApiService } from './../../services/api.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})

export class ApplicationPage implements OnInit {
  data: any = [];
  native: any = [];
  towns: any = [];
  relnship: any = [];
  countries: any = [];
  imageUrl: any;
  isNewProfile: boolean = false;
  imgProfile: any;
  imageUri: any;
  userName: any;
  myDate:string;
  
  
  err: any = {};
  constructor(
    private navCtrl: NavController,
    private api:ApiService,
    private util:UtilService,
    private actionSheetController:ActionSheetController,
    private camera: Camera,
    private datePicker: DatePicker,
  ) { }

  ngOnInit() {
    this.getUserDate();
  }

  getUserDate() { //console.log(this.api.member_id);
    this.api.getDataWithToken("memberlist").subscribe(
      (res: any) => {
        //console.log(res.data.mbrlistData);
        this.data = res.data.mbrlistData;
        this.native = res.data.native; 
        this.towns = res.data.towns;  
        this.relnship = res.data.relnship;
        this.countries = res.data.countries;   
           
      },
      (err) => {
        this.err = err.error.errors;
      }
    );
}

doSaveApplication(){  
  let reci: any = {};
  reci.name =  this.data.name;
  reci.fathername =  this.data.fathername;
  reci.surname =  this.data.surname;
  reci.native =  this.data.native;
  reci.dob =  this.data.dob;
  reci.nationality =  this.data.nationality;
  reci.bloodgroup =  this.data.bloodgroup;
  reci.gender = this.data.gender;
  reci.pobox =  this.data.pobox;
  reci.town =  this.data.town;
  reci.country =  this.data.country;
  reci.mobileno =  this.data.mobileno;
  reci.occupation =  this.data.occupation;
  reci.phyaddress =  this.data.phyaddress;
  reci.email =  this.data.email;
  reci.workaddress =  this.data.workaddress;
  reci.relationship =  this.data.relationship;
  reci.spousename =  this.data.spousename;
  reci.spousenative =  this.data.spousenative;
  reci.spousedob =  this.data.spousedob;
  reci.spousenative =  this.data.spousenative;
  reci.spousebloodgroup =  this.data.spousebloodgroup;
  reci.membertype =  this.data.membertype;
  reci.paymentmode =  this.data.paymentmode;
  reci.paymentref =  this.data.paymentref;
  reci.amount =  this.data.amount;
  reci.proposedby =  this.data.proposedby;
  reci.secondedby =  this.data.secondedby;     
  
  this.util.startLoad();
  this.api.postDataWithToken("addmember", reci).subscribe(
    (res: any) => { console.log(res.member);
      if (res.member) { 
        this.util.dismissLoader();
        this.util.presentToast("Application Submitted Successfully.");
        //this.api.bookid = res.data;
       this.navCtrl.navigateForward("/application");
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

async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: "Select an option",
    buttons: [
      {
        text: "Camera",
        icon: "camera",
        handler: () => {
          this.getCamera();
        },
      },
      {
        text: "Gallery",
        icon: "images-outline",
        handler: () => {
          this.getGallery();
        },
      },
      {
        text: "Close",
        icon: "close",
        handler: () => {},
      },
    ],
  });
  await actionSheet.present();
}

getGallery() {
  const cameraOptions = {
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true,
  };
  this.camera.getPicture(cameraOptions).then(
    (fileUri) => {
      this.imgProfile = "data:image/jpg;base64," + fileUri;
      this.imageUri = fileUri;
      this.isNewProfile = true;
      this.profileImage();
    },
    (err) => {}
  );
}
getCamera() {
  const cameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true,
  };
  this.camera.getPicture(cameraOptions).then(
    (fileUri) => {
      this.imgProfile = "data:image/jpg;base64," + fileUri;
      this.imageUri = fileUri;
      this.isNewProfile = true;
      this.profileImage();
    },
    (err) => {}
  );
}

profileImage() {
  let changeImage: any = {};
  changeImage.image = this.imageUri;
  this.util.startLoad();
  this.api.postDataWithToken("profile/picture/update", changeImage).subscribe(
    (res: any) => {
      if (res.success) {
        this.util.isUpdateProfile.next(true);
        this.util.presentToast(res.msg);
        this.api.getDataWithToken("profile").subscribe(
          (res: any) => {
            this.util.dismissLoader();
            this.data = res;
            this.userName = res.name;
            this.imgProfile = res.imageUri;
          },
          (err) => {
            this.util.dismissLoader();
            this.err = err.error.errors;
          }
        );
      }
    },
    (err) => {
      this.util.dismissLoader();
    }
  );
}
updateProfile() {
  this.util.startLoad();
  delete this.data.liked_salon;
  this.api
    .postDataWithToken("profile/update", {
      name: this.data.name,
    })
    .subscribe(
      (res: any) => {
        if (res.success) {
          this.util.isUpdateProfile.next(true);

          this.api.getDataWithToken("profile").subscribe(
            (res: any) => {
              this.util.dismissLoader();
              this.data = res;
              this.imgProfile = res.imageUri;
            },
            (err) => {
              this.util.dismissLoader();
              this.err = err.error.errors;
            }
          );

          this.util.presentToast("Profile is updated");
        } else {
          this.util.presentToast(res.message);
        }
      },
      (err) => {
        this.err = err.error.errors;
      }
    );
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
