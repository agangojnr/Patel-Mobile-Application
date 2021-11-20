import { UtilService } from "./../../services/util.service";
import { ApiService } from "./../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as moment from "moment";
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ActionSheetController } from "@ionic/angular";
import { Camera } from "@ionic-native/camera/ngx";

@Component({
  selector: 'app-add-relative',
  templateUrl: './add-relative.page.html',
  styleUrls: ['./add-relative.page.scss'],
})
export class AddRelativePage implements OnInit {
  data: any = {};
  ndata: any = [];
  rdata: any = [];
  sdata: any = [];
  err: any = {};
  showpassword = false;
  cshowpassword = false;
  password = false;
  catgoryName: any;
  myDate:string;
   isNewProfile: boolean = false;
  imgProfile: any;
  imageUri: any;
  userName: any;
  constructor(
  	 private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService,
     private datePicker: DatePicker,
     private camera: Camera,
    private actionSheetController: ActionSheetController
  	) { 

  	 //this.util.startLoad();
  	 

    this.api.getDataWithToken("nativeData").subscribe(
      (res: any) => {
        if (res.success) {
          //this.util.dismissLoader();
          this.ndata = res.data;
        }
      },
      (err) => {
        //this.util.dismissLoader();
        this.err = err.error.errors;
      }
    );


        this.api.getDataWithToken("relativeData").subscribe(
      (res: any) => {
        if (res.success) {
          //this.util.dismissLoader();
          this.rdata = res.data;
        }
      },
      (err) => {
        //this.util.dismissLoader();
        this.err = err.error.errors;
      }
    );

   this.api.getDataWithToken("sportData").subscribe(
      (res: any) => {
        if (res.success) {
          //this.util.dismissLoader();
          this.sdata = res.data;
        }
      },
      (err) => {
        //this.util.dismissLoader();
        this.err = err.error.errors;
      }
    );

  }

  ngOnInit() {
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

      doSaveMember() {

    let info: any = {};
    info.image =  this.imageUri;
    info.mname =  this.data.mname;
    info.native_place =  this.data.native_place;
    info.relation =  this.data.relation;
    info.sports_registered =  this.data.sports_registered;
    info.bgroup =  this.data.bgroup;
    info.dob =  this.data.dob;
    info.mobile_no =  this.data.mobile_no;
    info.memail =  this.data.memail;
    info.nationality =  this.data.nationality;
    info.memail =  this.data.memail;
    

  

      this.util.startLoad();
    this.api.postDataWithToken("saveFamilyData", info).subscribe(
      (res: any) => {
        if (res.success) {
          this.util.dismissLoader();
          //this.api.bookid = res.data;
         this.navCtrl.navigateForward("/offer");
       
        }
      },
      (err) => {
        this.util.dismissLoader();
        this.err = err.error.errors;
      }
    );



   

     

    }

}
