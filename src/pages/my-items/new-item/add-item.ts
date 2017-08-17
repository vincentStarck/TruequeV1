
import { Component } from '@angular/core';
import { NavController,ViewController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})


export class AddItemPage{
    constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController) {

  }

   dismiss() {
    this.viewCtrl.dismiss();
  }

}
