import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

//import { HomePage } from "../pages/home/home";
import { DebugPage } from "../pages/debug/debug";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = DebugPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
