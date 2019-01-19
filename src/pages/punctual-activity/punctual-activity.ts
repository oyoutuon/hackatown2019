import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PunctualActivity } from "../../../common/activity";

@Component({
  selector: "page-punctual-activity",
  templateUrl: "punctual-activity.html"
})
export class PunctualActivityPage {
  activity: PunctualActivity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad PunctualActivityPage");
  }
}
