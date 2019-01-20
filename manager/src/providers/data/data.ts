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
        .toPromise()
        .then((data: Activity[]) => {
          this.activities = data;
          return data;
        });
    } else {
      return new Promise((res, rej) => {
        res(this.activities);
      });
    }
  }

  getLocations() {
    if (!this.locations) {
      return this.http
        .get(SERVER_URL + "locations")
        .toPromise()
        .then((data: Location[]) => {
          this.locations = data;
          return data;
        });
    } else {
      return new Promise((res, rej) => {
        res(this.locations);
      });
    }
  }
}
