import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matrifilter',
  templateUrl: './matrifilter.component.html',
  styleUrls: ['./matrifilter.component.scss'],
})
export class MatrifilterComponent implements OnInit {

  @Input() name: string;
  @Input() matri:string;
  @Input() ages: any = [];
  @Input() countries: any = [];
  @Input() native: any = [];
  @Input() data: any = [];
  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  dismiss(){
    this.modalCtrl.dismiss();
  }

  submitSearch(){
    this.modalCtrl.dismiss({
      'ddata': "Some data from modal",
    });
  }

}
