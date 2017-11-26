import { MyItemsListService } from './../my-items-list-service';
import { Component,Input,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { File, FileEntry } from "@ionic-native/file";
import { ItemModel } from '../model/ItemModel';
import {UploadService} from "./upload-service";


@Component({
  selector: 'page-upload-img',
  templateUrl: 'upload-img.html',
  providers:[UploadService]
})
export class UploadImgPage implements OnInit{

 @Input() newItem:ItemModel;

  constructor(private uploadService: UploadService,
     private listService: MyItemsListService, private file: File,
      private sanitizer: DomSanitizer, private camera: Camera, 
      public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ngOnInit() {
    this.newItem.imgFileLocation = this.uploadService.getItems();
  }

  deletePhoto(index:number){
    this.uploadService.removePhoto(index);
    
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
      this.uploadService.addNewItem(imageData);    
      //this.camera.cleanup();
    }, (err) => {
      console.error(err);
    }); 

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
    
      console.info(imageData); 
      this.uploadService.addNewItem(imageData);    
    }, (err) => {
      console.error(err);
    });
  }

  // getFileEntry(imgUri: any) {
  //   this.file.resolveLocalFilesystemUrl(imgUri)
  //     .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
  //     .catch(err => console.log(err));
  // }


  // readFile(file: any) {
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     const formData = new FormData();
  //     const imgBlob = new Blob([reader.result], { type: file.type });
  //     formData.append('file', imgBlob, file.name);
  //     this.fotos.push(formData);
  //   };
  //   reader.readAsArrayBuffer(file);
  // }
}
