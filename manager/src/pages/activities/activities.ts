import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Activity, SubscriptionActivity } from "../../../../common/activity";
import { ActivityPage } from "../activity/activity";
import { CreateActivityPage } from "../create-activity/create-activity";
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-activities",
  templateUrl: "activities.html"
})
export class ActivitiesPage {
  activities: Activity[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider
  ) {
    this.dataProvider.getActivities().then((data: Activity[]) => {
      this.activities = data.slice(1,10);
    });
  }

  ionViewDidLoad() {}

  createNewActivity() {
    this.navCtrl.push(CreateActivityPage);
  }

  onSelect(selected: Activity) {
    this.navCtrl.push(ActivityPage, { activity: selected });
  }

  isSubscription(result: any): result is SubscriptionActivity {
    return result.period !== undefined;
  }
}
