

import { Component, OnInit } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ItemModel } from '../../models/item';
import { MyItemsListService } from '../my-items-list-service';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})


export class AddItemPage implements OnInit {



  private item: ItemModel;
  constructor(public listService: MyItemsListService, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = new ItemModel('', '', '');


  }
  ngOnInit() {
    }


  dismiss() {
    this.viewCtrl.dismiss();
  }
  addNewItem() {

  console.info("NEW ITEM TO ADD:")
   console.info(this.item)
    this.listService.addNewItem(this.item);
    this.dismiss();

  }

}
