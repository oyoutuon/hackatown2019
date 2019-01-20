import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Activity, SubscriptionActivity } from "../../../../common/activity";

@Component({
  selector: "page-activity",
  templateUrl: "activity.html"
})
export class ActivityPage {
  activity: Activity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activity = this.navParams.get("activity");
  }

  ionViewDidLoad() {}

  isSubscription(result: any): result is SubscriptionActivity {
    return result.period !== undefined;
  }
}
