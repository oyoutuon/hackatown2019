import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const SERVER_URL = "https://hackatown2019-server.herokuapp.com/";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(public http: HttpClient) { }

  getActivities() {
    return this.http.get(SERVER_URL + "activities/").toPromise();
  }

  getLocations() {
    return this.http.get(SERVER_URL + "locations/").toPromise();
  }
}
