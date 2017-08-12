import { LogginService } from './../services/logging.service';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import {AuthenticationPage} from '../pages/main/authentication/authentication';
import {ItemListPage} from '../pages/item-list/item-list';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';



@Component({
  templateUrl: 'app.html',
    providers: [NativeStorage]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage:any; //= AuthenticationPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public nativeStorage: NativeStorage,
    public logginService:LogginService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Authentication', component: AuthenticationPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      let env=this;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        this.nativeStorage.getItem('user')
        .then(function (data){
          env.logginService.logInfo("User was looged previosly, redirect to ItemListPage");
          env.rootPage= ItemListPage;
       
        },function (error){
          env.logginService.logInfo('User has not logget , redirect to AuthenticationPage');
          env.rootPage= ItemListPage;//AuthenticationPage;
        })

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
