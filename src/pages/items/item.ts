import { ItemDetailPage } from './item-detail/item-detail';
import { LogginService } from './../../services/logging.service';
import { ItemModel } from './../models/item';
import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'page-item',
    templateUrl: 'item.html'
})
export class ItemPage implements OnInit {

    @Input('itemInput') item: ItemModel;

    constructor(public navCtrl: NavController, public navParams: NavParams, public logginService: LogginService) {

    }
    ngOnInit() {

    }
    goDetails(selectedItem: ItemModel) {
      
        this.navCtrl.push(ItemDetailPage, {
            selectedItem: selectedItem
        });
    }
}