import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Location } from "../../../../common/location";
import { Activity } from "../../../../common/activity";

const SERVER_URL = "https://hackatown2019-server.herokuapp.com/";

@Injectable()
export class DataProvider {
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
        });
    } else {
      return this.locations;
    }
  }
}
