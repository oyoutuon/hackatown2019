import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import {
  mockPunctualActivty,
  mockSubscriptionActivty,
  Activity
} from "../../../common/activity";
import { SubscriptionActivityPage } from "../subscription-activity/subscription-activity";

@Component({
  selector: "page-results",
  templateUrl: "results.html"
})
export class ResultsPage {
  results: Activity[] = [mockPunctualActivty, mockSubscriptionActivty];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  onSelect(result: Activity) {
    const page = SubscriptionActivityPage;
    this.navCtrl.push(page);
  }
}
