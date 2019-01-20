import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Activity } from "../../../common/activity";
import { Location } from "../../../common/location";

const SERVER_URL = "https://hackatown2019-server.herokuapp.com/";

@Injectable({
  providedIn: "root"
})
export class DataService {
  locations: Location[];
  activities: Activity[];

  constructor(public http: HttpClient) {}

  getActivities() {
    if (!this.activities) {
      return this.http
        .get(SERVER_URL + "activities")
        .subscribe((data: Activity[]) => {
          this.activities = data;
          console.log(this.activities);
        });
    } else {
      return this.activities;
    }
  }

  getLocations() {
    if (!this.locations) {
      return this.http
        .get(SERVER_URL + "locations")
        .subscribe((data: Location[]) => {
          this.locations = data;
          console.log(this.locations);
        });
    } else {
      return this.locations;
    }
  }
}
