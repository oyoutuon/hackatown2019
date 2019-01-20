import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Activity, SubscriptionActivity } from "../../../../common/activity";
import { SubscriptionActivityPage } from "../subscription-activity/subscription-activity";
import { mockParks } from "../../assets/data/mocks";
import { Location } from "../../../../common/location";

@Component({
  selector: "page-results",
  templateUrl: "results.html"
})
export class ResultsPage {
  results: Activity[];

  parks: Location[] = mockParks;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.results);
    this.results = this.navParams.get('results');
  }

  ionViewDidLoad() {}

  onSelect(result: Activity) {
    const page = SubscriptionActivityPage;
    this.navCtrl.push(page);
  }

  isSubscription(result: any): result is SubscriptionActivity {
    return result.period !== undefined;
  }
}
