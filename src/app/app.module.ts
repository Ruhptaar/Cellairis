import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { ResetPasswordPage } from '../pages/resetpassword/resetpassword';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
*/
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';
import { AppointmentProvider } from '../providers/appointment/appointment';

/*var config = {
   apiKey: "AIzaSyDpW2mnEprnnlgUutR2WQ2UF6V4HKqLIU8",
   authDomain: "cellairis-b2b0a.firebaseapp.com",
   databaseURL: "https://cellairis-b2b0a.firebaseio.com",
   projectId: "cellairis-b2b0a",
   storageBucket: "cellairis-b2b0a.appspot.com",
   messagingSenderId: "471928425313"
 };
*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AppointmentsPage,
    ResetPasswordPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
    //AngularFireModule.initializeApp(firebaseConfig),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AppointmentsPage,
    ResetPasswordPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EventProvider,
    ProfileProvider,
    AppointmentProvider
  ]
})
export class AppModule {}
