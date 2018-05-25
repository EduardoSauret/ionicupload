import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { TicketsPage } from '../pages/tickets/tickets';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';


// Initialize Firebase
export const config = {
  apiKey: "AIzaSyC1NjmIX4Pk0NfmMjYMJMECSAGM2oOnaqg",
  authDomain: "ionicupload-7cf20.firebaseapp.com",
  databaseURL: "https://ionicupload-7cf20.firebaseio.com",
  projectId: "ionicupload-7cf20",
  storageBucket: "",
  messagingSenderId: "460172550329"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    UserProfilePage,
    ItemCreatePage,
    TicketsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    UserProfilePage,
    ItemCreatePage,
    TicketsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsersserviceProvider
  ]
})
export class AppModule { }
