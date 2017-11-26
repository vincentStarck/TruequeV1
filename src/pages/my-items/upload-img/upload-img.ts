import { MyItemsListService } from './../my-items-list-service';
import { Component,Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { File, FileEntry } from "@ionic-native/file";
import { ItemModel } from './../../models/item';


@Component({
  selector: 'page-upload-img',
  templateUrl: 'upload-img.html',
})
export class UploadImgPage {

 @Input() newItem:ItemModel;
  private fotos: any[] = [];

  constructor(private listService: MyItemsListService, private file: File, private sanitizer: DomSanitizer, private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {

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

      console.info(imageData);
      this.fotos.push(imageData);
      this.newItem.imgFileLocation=imageData;
    

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
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }

    this.camera.getPicture(options).then((imageData) => {
      //  let base64Image = 'data:image/jpeg;base64,' + imageData;
      //  console.info(imageData);

      //this.getFileEntry(imageData);
      console.info(imageData);
      //   this.fotos.push(this.sanitizer.bypassSecurityTrustUrl(imageData));

      this.fotos.push(imageData);
      this.newItem.imgFileLocation=imageData;

    }, (err) => {
      console.error(err);
    });
    // this.item.imgUrl="assets/img/nike.jpg";
    // this.listService.addNewItem(this.item)
    //this.dismiss();


  }

  getFileEntry(imgUri: any) {
    this.file.resolveLocalFilesystemUrl(imgUri)
      .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
      .catch(err => console.log(err));
  }


  readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], { type: file.type });
      formData.append('file', imgBlob, file.name);
      this.fotos.push(formData);
    };
    reader.readAsArrayBuffer(file);
  }
}
