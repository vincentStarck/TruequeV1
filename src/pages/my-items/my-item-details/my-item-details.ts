
import { Component } from '@angular/core';
import { NavController,ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'my-page-item-details',
  templateUrl: 'my-item-details.html'
})
export class MyItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('selectedItem');
  }
   dismiss() {
    this.viewCtrl.dismiss();
  }
}
