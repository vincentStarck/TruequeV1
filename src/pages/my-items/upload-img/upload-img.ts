import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



@Component({
  selector: 'page-upload-img',
  templateUrl: 'upload-img.html',
})
export class UploadImgPage {

  fotos: String[] = [];
 
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
 
  }

  addImgFromCamera() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      //  console.info(imageData);
   
      this.fotos.push(imageData);
      
      //this.camera.cleanup();
    }, (err) => {
      console.error(err);
    });
    // this.item.imgUrl="assets/img/nike.jpg";
    // this.listService.addNewItem(this.item)
    //this.dismiss();

  }

  addImgFromAlbum() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      //  let base64Image = 'data:image/jpeg;base64,' + imageData;
      //  console.info(imageData);


      this.fotos.push(imageData);


    }, (err) => {
      console.error(err);
    });
    // this.item.imgUrl="assets/img/nike.jpg";
    // this.listService.addNewItem(this.item)
    //this.dismiss();


  }




}
