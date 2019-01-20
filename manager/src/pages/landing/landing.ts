import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ActivitiesPage } from "../activities/activities";

@Component({
  selector: "page-landing",
  templateUrl: "landing.html"
})
export class LandingPage {
  activitiesPage = ActivitiesPage;
  message: string = '';
  password: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onLogIn() {
    (this.password === 'marcus') ? this.navCtrl.push(this.activitiesPage) : this.message = 'Wrong password';
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LandingPage");
  }
}
