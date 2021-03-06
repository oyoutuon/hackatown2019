import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";
import { LandingPage } from "../pages/landing/landing";
import { SearchPage } from "../pages/search/search";
import { ResultsPage } from "../pages/results/results";
import { PunctualActivityPage } from "../pages/punctual-activity/punctual-activity";
import { SubscriptionActivityPage } from "../pages/subscription-activity/subscription-activity";
import { LocationPage } from "../pages/location/location";
import { HttpClientModule } from "@angular/common/http";
import { AgmCoreModule } from "@agm/core";
import { DataProvider } from '../providers/data/data';
@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    SearchPage,
    ResultsPage,
    PunctualActivityPage,
    SubscriptionActivityPage,
    LocationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAuFeSreL0UefHrw_HKXkXeYZPtapIJdMg"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule { }
