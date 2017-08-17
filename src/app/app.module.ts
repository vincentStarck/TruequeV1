
import { LogginService } from './../services/logging.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AuthenticationPage} from '../pages/main/authentication';
import {ItemListPage} from '../pages/items/item-list/item-list';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import {ItemDetailPage} from '../pages/items/item-detail/item-detail';
import {MyItemPage} from  '../pages/my-items/my-item/my-item';
import  {MyItemDetailsPage} from '../pages/my-items/my-item-details/my-item-details';
import {MyItemListPage} from '../pages/my-items/my-item-list';
import {ItemPage} from '../pages/items/item';
import { ListPage } from '../pages/list/list';
import { LoginPage} from '../pages/login/login';
import {LoginService} from '../services/login.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyItemsListService } from '../pages/my-items/my-items-list-service';

@NgModule({
  declarations: [
    MyApp,
    MyItemPage,
    AuthenticationPage,
    MyItemDetailsPage,
    MyItemListPage,
    ItemListPage,
    ItemPage,
    ItemDetailsPage,
    ItemDetailPage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthenticationPage,
    MyItemDetailsPage,
    MyItemListPage,
    MyItemPage,
    ItemListPage,
    ItemPage,
    ItemDetailsPage,
    ItemDetailPage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    LogginService,
    MyItemsListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
