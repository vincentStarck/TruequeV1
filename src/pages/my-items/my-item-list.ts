import { ItemModel } from '../models/item';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MyItemsListService } from './my-items-list-service';
import { AddItemPage } from './new-item/add-item';
@Component({
  selector: 'my-item-list-page',
  templateUrl: 'my-item-list.html'
})
export class MyItemListPage implements OnInit {

  items: ItemModel[] = [];
  constructor(public modalCtrl: ModalController, public listService: MyItemsListService, public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.items = this.listService.getItems();
    this.listService.itemsChanged.subscribe(
      (items: ItemModel[]) => {
        this.items = items;
      }
    )

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }
  addItem() {
    let modalDetail = this.modalCtrl.create(AddItemPage);
    modalDetail.present();

    //  let newItem = new ItemModel('new item','new Description', 'assets/img/bici.jpg');
    //  this.listService.addNewItem(newItem);
  }


}
