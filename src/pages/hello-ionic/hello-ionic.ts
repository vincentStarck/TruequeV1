import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import { LoginPage} from '../login/login';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public modalCtrl: ModalController) {

  }

  doLogin(){
    console.log("do login");
    let modal=this.modalCtrl.create(LoginPage,{data:{userName:"Vincent", password:"Espartanostodalavida"}});
    modal.present();
  }
  doSignup(){
     console.log("do doSignup");
  }
}
