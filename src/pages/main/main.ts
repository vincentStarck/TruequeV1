import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'main.html'
})
export class MainPage {
  constructor(public modalCtrl: ModalController) {

  }

  doLogin() {
    console.log("do login");
    let modal = this.modalCtrl.create(LoginPage, { data: { userName: "Vincent", password: "Espartanostodalavida" } });
    modal.present();
  }
  doLoginWithFaceBook() {

  }
  doSignup() {
    console.log("do doSignup");
  }
}
