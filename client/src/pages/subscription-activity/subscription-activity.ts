import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { mockSubscriptionActivity } from "../../assets/data/mocks";

@Component({
  selector: "page-subscription-activity",
  templateUrl: "subscription-activity.html"
})
export class SubscriptionActivityPage {
  activity = mockSubscriptionActivity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SubscriptionActivityPage");
  }
}
