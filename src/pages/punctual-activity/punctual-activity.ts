import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PunctualActivity } from "../../../common/activity";
import { mockPunctualActivity } from "../../assets/data/mocks";

@Component({
  selector: "page-punctual-activity",
  templateUrl: "punctual-activity.html"
})
export class PunctualActivityPage {
  activity: PunctualActivity = mockPunctualActivity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.activity);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PunctualActivityPage");
  }
}
