import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PunctualActivity } from "../../../common/activity";
import { mockPunctualActivty } from "../../assets/data/mocks";

@Component({
  selector: "page-punctual-activity",
  templateUrl: "punctual-activity.html"
})
export class PunctualActivityPage {
  activity: PunctualActivity = mockPunctualActivty;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.activity);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PunctualActivityPage");
  }
}
