import { LogginService } from './../../../services/logging.service';
import { ItemModel } from './../../models/item';

import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, Input } from '@angular/core';
import {MyItemDetailsPage} from '../my-item-details/my-item-details';
import {MyItemsListService} from '../my-items-list-service';

@Component({
    selector: 'page-my-item',
    templateUrl: 'my-item.html'
})
export class MyItemPage implements OnInit {

    @Input('itemInput') item: ItemModel
    @Input('index') index:number;

    constructor(public listService:MyItemsListService, public navCtrl: NavController, public navParams: NavParams, public logginService: LogginService) {

    }
    ngOnInit() {

    }
    goDetails(selectedItem: ItemModel) {

        this.navCtrl.push(MyItemDetailsPage, {
            selectedItem: selectedItem
        });
    }

    deleteItem(index:number){
      console.info(index);
     this.listService.removeItem(index);
    }
}
