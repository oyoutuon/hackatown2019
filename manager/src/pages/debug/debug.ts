import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { LandingPage } from "../landing/landing";
import { ActivitiesPage } from "../activities/activities";
import { ActivityPage } from "../activity/activity";
import { CreateActivityPage } from "../create-activity/create-activity";

@Component({
  selector: "page-debug",
  templateUrl: "debug.html"
})
export class DebugPage {
  keys = Object.keys;

  pages = {
    landing: LandingPage,
    activities: ActivitiesPage,
    activity: ActivityPage,
    "create-activity": CreateActivityPage
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
