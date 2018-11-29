import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgZone } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { ResetPasswordPage } from '../pages/resetpassword/resetpassword';
import { SignupPage } from '../pages/signup/signup';

import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './credentials';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

/* dont forget to change this to home when all said and done*/
  zone: NgZone;
  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    //this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Appointments', component: AppointmentsPage },
      { title: 'Signup', component: SignupPage },
      { title: 'ResetPassword', component: ResetPasswordPage },

    ];
    this.zone = new NgZone({});
    firebase.initializeApp(firebaseConfig);
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    this.zone.run( () => {
     if (!user){
       this.rootPage = LoginPage;
       unsubscribe();
     } else {
       this.rootPage = HomePage;
       unsubscribe();
     }
  });

});

}
/*
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
*/
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
