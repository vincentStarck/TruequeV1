import { ItemModel } from '../models/item';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyItemsListService } from './my-items-list-service';

@Component({
  selector: 'my-item-list-page',
  templateUrl: 'my-item-list.html',
  providers: [MyItemsListService]
})
export class MyItemListPage implements OnInit {

  items: ItemModel[] = [];
  constructor(private listService: MyItemsListService, public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.items = this.listService.getItems();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

}
