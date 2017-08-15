import { ItemModel } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage implements OnInit {

items:ItemModel[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 ngOnInit(){

   this.items.push(new ItemModel('nameTest1','descriptionTest1','assets/img/tv.jpg'));
   this.items.push(new ItemModel('nameTest2','descriptionTest2','assets/img/nike.jpg'));
   
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

}
