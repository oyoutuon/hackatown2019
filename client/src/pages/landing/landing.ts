import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { SearchPage } from "../search/search";

@Component({
  selector: "page-landing",
  templateUrl: "landing.html"
})
export class LandingPage {
  searchPage = SearchPage;
  message: string = '';
  password: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  onLogIn() {
    (this.password === 'marcus') ? this.navCtrl.push(SearchPage) : this.message = 'Wrong password';
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LandingPage");
  }
}
