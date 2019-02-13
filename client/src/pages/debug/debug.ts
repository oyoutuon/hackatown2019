import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { LandingPage } from "../landing/landing";
import { SearchPage } from "../search/search";
import { ResultsPage } from "../results/results";
import { PunctualActivityPage } from "../punctual-activity/punctual-activity";
import { SubscriptionActivityPage } from "../subscription-activity/subscription-activity";
import { LocationPage } from "../location/location";

@Component({
  selector: "page-debug",
  templateUrl: "debug.html"
})
export class DebugPage {
  keys = Object.keys;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  pages = {
    landing: LandingPage,
    search: SearchPage,
    results: ResultsPage,
    "punctual-activity": PunctualActivityPage,
    "subscription-activity": SubscriptionActivityPage,
    location: LocationPage
  };
}
