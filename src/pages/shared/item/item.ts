import { LogginService } from './../../../services/logging.service';
import { ItemModel } from './../../models/item';

import { NavController, NavParams, ModalController} from 'ionic-angular';
import { Component, OnInit, Input } from '@angular/core';
import { ItemDetailPage } from '../detail/item-detail';
import { ItemService } from '../services/my-items-list-service';

@Component({
  selector: 'item-page',
  templateUrl: 'item.html',
  providers:[ItemService]
})
export class ItemPage implements OnInit {

  @Input('itemInput') item: ItemModel
  @Input('index') index: number;

  constructor(public modalCtrl: ModalController, public itemService: ItemService, public navCtrl: NavController, public navParams: NavParams, public logginService: LogginService) {

  }
  ngOnInit() {

  }
  goDetails(selectedItem: ItemModel) {
    // let modalDetail = this.modalCtrl.create(ItemDetailPage, { selectedItem: selectedItem });
    // modalDetail.present();

    this.navCtrl.push(ItemDetailPage, {
        selectedItem: selectedItem
    });
  }

  deleteItem(index: number) {
    console.info(index);
    this.itemService.removeItem(index);
  }
}

