import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Activity } from "../../../../common/activity";

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
  selector: "page-activity",
  templateUrl: "activity.html"
})
export class ActivityPage {
  activity: Activity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activity = this.navParams.get("activity") || mockActivity[0];
  }

  ionViewDidLoad() {}
}
