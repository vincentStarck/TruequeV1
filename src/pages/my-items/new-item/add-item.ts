

import { Component, OnInit } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ItemModel } from '../model/ItemModel';
import { MyItemsListService } from '../my-items-list-service';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})


export class AddItemPage implements OnInit {
  private item: ItemModel;
  constructor(public listService: MyItemsListService, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = new ItemModel('', '', []);


  }
  ngOnInit() {
    }


  addNewItem() {

   this.listService.addNewItem(this.item);
   this.navCtrl.pop();
  }

}
