import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Activity, SubscriptionActivity } from "../../../../common/activity";
import { ActivityPage } from "../activity/activity";
import { CreateActivityPage } from "../create-activity/create-activity";

const mockLocation = {
  activities: [],
  name: "Chez marcus",
  address: "environ",
  phoneNumber: "+1 514 322 4221",
  email: "marcus.phan@polymtl.ca"
};

const mockActivity = [
  {
    sport: "Competitive eating",
    location: mockLocation,
    price: 0,
    type: "free",
    traffic: "some",
    manager: "Hanifa Boucheneb",
    description: "marcus ate all of the food.",
    imgUrl: "",
    time: { startTime: new Date(), endTime: new Date() }
  }
];

@Component({
  selector: "page-activities",
  templateUrl: "activities.html"
})
export class ActivitiesPage {
  activities: Activity[] = mockActivity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

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
