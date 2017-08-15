import { LogginService } from './../../services/logging.service';
import { OnInit, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'admin-page',
    templateUrl: 'admin-my-item.html'

})

export class MyItemPageAdmin implements OnInit {
    constructor(public navCtrl: NavController, public navParams: NavParams, public logginService: LogginService) {

    }
    ngOnInit() {

    }
}