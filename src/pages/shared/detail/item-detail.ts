import { LogginService } from './../../../services/logging.service';
import { ItemModel } from '../model/ItemModel';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  selectedItem: ItemModel;  

  constructor(public logginService:LogginService, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    
    this.selectedItem = navParams.get('selectedItem');
      this.logginService.logInfo(this.selectedItem);
  }
}
