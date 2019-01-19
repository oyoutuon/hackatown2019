import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { DebugPage } from "../pages/debug/debug";
import { LandingPage } from "../pages/landing/landing";
import { SearchPage } from "../pages/search/search";
import { ResultsPage } from "../pages/results/results";
import { PunctualActivityPage } from "../pages/punctual-activity/punctual-activity";
import { SubscriptionActivityPage } from "../pages/subscription-activity/subscription-activity";
import { LocationPage } from "../pages/location/location";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DebugPage,
    LandingPage,
    SearchPage,
    ResultsPage,
    PunctualActivityPage,
    SubscriptionActivityPage,
    LocationPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DebugPage,
    LandingPage,
    SearchPage,
    ResultsPage,
    PunctualActivityPage,
    SubscriptionActivityPage,
    LocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
