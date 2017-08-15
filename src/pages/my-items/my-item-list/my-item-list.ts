import { ItemModel } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'my-item-list-page',
  templateUrl: 'my-item-list.html',
})
export class MyItemListPage implements OnInit {

items:ItemModel[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 ngOnInit(){

   this.items.push(new ItemModel('nike','Nike','assets/img/nike.jpg'));
   this.items.push(new ItemModel('bicicleta','bici de montaña','assets/img/bici.jpg'));
   
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

}
