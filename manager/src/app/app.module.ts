import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ActivitiesPage } from '../pages/activities/activities';
import { ActivityPage } from '../pages/activity/activity';
import { CreateActivityPage } from '../pages/create-activity/create-activity';
import { DebugPage } from '../pages/debug/debug';
import { LandingPage } from '../pages/landing/landing';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    ActivitiesPage,
    ActivityPage,
    CreateActivityPage,
    DebugPage,
    LandingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivitiesPage,
    ActivityPage,
    CreateActivityPage,
    DebugPage,
    LandingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
