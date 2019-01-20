import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { LocationPage } from "../location/location";
import { SubscriptionActivity } from "../../../../common/activity";

@Component({
  selector: "page-subscription-activity",
  templateUrl: "subscription-activity.html"
})
export class SubscriptionActivityPage {
  activity: SubscriptionActivity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activity = this.navParams.get('activity');
  }

  onClick() {
    this.navCtrl.push(LocationPage, {location: this.activity.location});
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SubscriptionActivityPage");
  }
}
