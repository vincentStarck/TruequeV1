

import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ItemModel } from '../../models/item';
import { MyItemsListService } from '../my-items-list-service';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})


export class AddItemPage {

  item: ItemModel;
  constructor(public listService: MyItemsListService, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = new ItemModel('', '', '');


  }


  dismiss() {
    this.viewCtrl.dismiss();
  }


}
