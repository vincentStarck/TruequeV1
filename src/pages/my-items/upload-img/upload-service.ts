
export class UploadService {
    private fotos: string[];
  constructor() {
  this.fotos=[];
  }
  getItems() {
    return this.fotos;
  }

  addNewItem(foto:any) {
    this.fotos.push(foto);  
  }

  removePhoto(id: number) {
    this.fotos.splice(id, 1);  
  }

}
