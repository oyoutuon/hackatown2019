import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PunctualActivity } from "../../../../common/activity";
import { LocationPage } from "../location/location";
import faker from "faker";

@Component({
  selector: "page-punctual-activity",
  templateUrl: "punctual-activity.html"
})
export class PunctualActivityPage {
  activity: PunctualActivity;
  fakeAvatar = faker.image.avatar();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activity = this.navParams.get("activity");
  }

  onClick() {
    this.navCtrl.push(LocationPage, { location: this.activity.location });
  }
}
