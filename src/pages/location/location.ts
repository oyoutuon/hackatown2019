import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Location } from "../../../common/location";
import { mockLocation, mockLocations } from "../../assets/data/mocks";

@Component({
  selector: "page-location",
  templateUrl: "location.html"
})
export class LocationPage {
  lat: number = 45.5017;
  lng: number = -73.5673;
  location: Location = mockLocation;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log(mockLocations);
  }
}
