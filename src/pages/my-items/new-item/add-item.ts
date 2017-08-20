

import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ItemModel } from '../../models/item';
import { MyItemsListService } from '../my-items-list-service';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})


export class AddItemPage {

  item: ItemModel;
  constructor(private camera: Camera, public listService: MyItemsListService, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = new ItemModel('', '', '');


  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
  addNewItem() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.info(base64Image);

    }, (err) => {
      console.error(err);
    });
    // this.item.imgUrl="assets/img/nike.jpg";
    // this.listService.addNewItem(this.item)
    //this.dismiss();
  }

}
