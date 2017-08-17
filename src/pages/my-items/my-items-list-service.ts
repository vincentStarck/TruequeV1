import { ItemModel } from '../models/item';
export class MyItemsListService {

  private items: ItemModel[] = [
    new ItemModel('nike', 'Nike', 'assets/img/nike.jpg'),
    new ItemModel('bicicleta', 'bici de montaña', 'assets/img/bici.jpg')
  ];
  constructor() {

  }
  getItems() {
    return this.items.slice();
  }

  addNewItem(item:ItemModel){
    this.items.push(item);
  }

  removeItem(id:number){
    this.items.splice(id,1);
  }

}
