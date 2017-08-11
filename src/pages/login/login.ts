import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {UserModel} from './userModel';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {


  private userModel:UserModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ngOnInit() {
    let data = this.navParams.get("data");
    this.userModel = new UserModel( data.userName,data.password);
    console.log(this.userModel);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
