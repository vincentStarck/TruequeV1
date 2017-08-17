
import { LogginService } from './../services/logging.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AuthenticationPage} from '../pages/main/authentication';
import {ItemListPage} from '../pages/items/item-list/item-list';
import {ItemDetailsPage } from '../pages/item-details/item-details';
import {ItemDetailPage} from '../pages/items/item-detail/item-detail';
import {ItemPage} from '../pages/items/item';
import {ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import {LoginService} from '../services/login.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyItemsModule} from '../pages/my-items/my-item.module';


@NgModule({
  declarations: [
    MyApp,
    AuthenticationPage,
    ItemListPage,
    ItemPage,
    ItemDetailsPage,
    ItemDetailPage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    MyItemsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AuthenticationPage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
