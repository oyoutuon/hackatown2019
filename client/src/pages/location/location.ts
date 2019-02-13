import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Location } from "../../../../common/location";
import { HttpClient } from "@angular/common/http";
import { MapsAPILoader } from "@agm/core";

const GEOCODING_URL = "https://maps.googleapis.com/maps/api/geocode/json";

@Component({
  selector: "page-location",
  templateUrl: "location.html"
})
export class LocationPage {
  location: Location;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public mapsAPILoader: MapsAPILoader
  ) {
    this.location = this.navParams.get("location");
  }

  ionViewDidLoad() {
    this.mapsAPILoader.load().then(() => {
      if (!this.location.address) {
        const geocoder = new google.maps.Geocoder();
        const { lat, lng } = this.location;
        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          this.location.address = results[0].formatted_address;
        });
      }

      if (!this.location.lat) {
        const address = this.location.address;
        this.http
          .get(GEOCODING_URL, {
            params: { address, key: "AIzaSyAuFeSreL0UefHrw_HKXkXeYZPtapIJdMg" }
          })
          .subscribe((result: any) => {
            const { lat, lng } = result.results[0].geometry.location;
            this.location.lat = lat;
            this.location.lng = lng;
          });
      }
    });
  }
}
