import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Activity } from "../../../common/activity";
import { SubscriptionActivityPage } from "../subscription-activity/subscription-activity";
import { mockAvtivities } from "../../assets/data/mocks";

@Component({
  selector: "page-results",
  templateUrl: "results.html"
})
export class ResultsPage {
  results: Activity[] = mockAvtivities;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  onSelect(result: Activity) {
    const page = SubscriptionActivityPage;
    this.navCtrl.push(page);
  }
}
