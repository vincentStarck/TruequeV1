import { LogginService } from './../../services/logging.service';
import { LoginService } from '../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {UserModel} from './userModel';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
 })
export class LoginPage implements OnInit {


  private userModel:UserModel;
  constructor(public loginService:LoginService,public logginService: LogginService ,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
   
  }
  ngOnInit() {
    let data = this.navParams.get("data");
    this.userModel = new UserModel( data.userName,data.password);
    this.logginService.logInfo(this.userModel);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
