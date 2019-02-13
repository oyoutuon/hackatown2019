import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Activity, SubscriptionActivity } from "../../../../common/activity";
import { SubscriptionActivityPage } from "../subscription-activity/subscription-activity";
import { mockParks } from "../../assets/data/mocks";
import { Location } from "../../../../common/location";
import { PunctualActivityPage } from "../punctual-activity/punctual-activity";

@Component({
  selector: "page-results",
  templateUrl: "results.html"
})
export class ResultsPage {
  results: Activity[];
  searchFilters: string[];

  parks: Location[] = mockParks;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.results = this.navParams.get('results');
    this.searchFilters = this.navParams.get('searchFilters');
  }

  onSelect(result: Activity) {
    const page = this.isSubscription(result) ? SubscriptionActivityPage : PunctualActivityPage;
    this.navCtrl.push(page, { activity: result });
  }

  isSubscription(result: any): result is SubscriptionActivity {
    return result.period !== undefined;
  }
}
