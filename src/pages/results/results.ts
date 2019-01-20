import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Activity } from "../../../common/activity";
import { SubscriptionActivityPage } from "../subscription-activity/subscription-activity";
import { mockActivities } from "../../assets/data/mocks";

@Component({
  selector: "page-results",
  templateUrl: "results.html"
})
export class ResultsPage {
  results: Activity[] = mockActivities;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.results);
  }

  ionViewDidLoad() {}

  onSelect(result: Activity) {
    const page = SubscriptionActivityPage;
    this.navCtrl.push(page);
  }
}
