import { ItemModel } from '../models/item';
import {EventEmitter} from '@angular/core';
export class MyItemsListService {

  itemsChanged = new EventEmitter<ItemModel[]>();
  imgAdded = new EventEmitter<string>();
  private fileUri :string;
  private items: ItemModel[] = [
    new ItemModel('nike', 'Nike', 'assets/img/nike.jpg'),
    new ItemModel('bicicleta', 'bici de montaña', 'assets/img/bici.jpg')
  ];
  constructor() {

  }
  getItems() {
    return this.items.slice();
  }
  addImg(fileUri:string){
    this.fileUri =fileUri;
    this.imgAdded.emit(this.fileUri.slice());

  }

  addNewItem(item: ItemModel) {
    this.items.push(item);
    this.itemsChanged.emit(this.items.slice());
  }

  removeItem(id: number) {
    this.items.splice(id, 1);
    this.itemsChanged.emit(this.items.slice());
  }

}
