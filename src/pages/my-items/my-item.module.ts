import { UploadImgPage } from './upload-img/upload-img';
import { NgModule } from '@angular/core';
import { MyItemPage } from './my-item/my-item';
import { MyItemDetailsPage } from './my-item-details/my-item-details';
import { AddItemPage } from './new-item/add-item';
import { MyItemListPage } from './my-item-list';
import { MyItemsListService } from './my-items-list-service';
import { IonicModule } from 'ionic-angular';


@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    MyItemPage,
    MyItemDetailsPage,
    AddItemPage,
    MyItemListPage,
    UploadImgPage
  ],
  providers: [
    MyItemsListService
  ],
  entryComponents: [
    MyItemPage,
    MyItemDetailsPage,
    AddItemPage,
    MyItemListPage,
    UploadImgPage
  ]

})

export class MyItemsModule {
}
