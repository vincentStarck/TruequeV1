import { ItemModel } from  "../model/ItemModel"
import {EventEmitter} from '@angular/core';
export class ItemService {

  itemsChanged = new EventEmitter<ItemModel[]>();
 

  private items: ItemModel[] = [
    new ItemModel('nike', 'Nike', ['assets/img/nike.jpg']),
    new ItemModel('bicicleta', 'bici de montaña', ['assets/img/bici.jpg','assets/img/nike.jpg'])
  ];
  constructor() {

  }
  getItems() {
    return this.items.slice();
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
