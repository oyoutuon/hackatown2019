import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { playTypes, trafficTypes } from "../../assets/data/mocks";
import { ResultsPage } from "../results/results";
import { DataProvider } from "../../providers/data/data";
import { Activity } from "../../../../common/activity";

@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  playTypes = playTypes;
  trafficTypes = trafficTypes;
  activities: Activity[];

  sport: string = "";
  location: string = "";
  priceMin: number;
  priceMax: number;
  type: string = "";
  traffic: string = "";
  manager: string = "";
  date: Date;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider
  ) {
    this.dataProvider.getActivities().then((data: Activity[]) => {
      this.activities = data;
    });
  }

  onSubmit($event) {
    let searchFilters = [];
    let filterResults = this.activities;
    if (this.sport) {
      filterResults = filterResults.filter(
        activity => activity.sport.toLowerCase().includes(this.sport.toLowerCase())
      );
      searchFilters.push("sport");
    }
    if (this.location) {
      filterResults = filterResults.filter(
        activity => activity.location.name.toLowerCase().includes(this.location.toLowerCase())
      );
      searchFilters.push("location");
    }
    if (this.priceMin !== undefined && this.priceMin !== null
      || this.priceMax !== undefined && this.priceMax !== null) {
      filterResults = filterResults.filter(
        activity =>  {
          return this.between(activity.price, this.priceMin, this.priceMax);
      });
      searchFilters.push("price");
    }
    if (this.date) {
      // filterResults = filterResults.filter(
      //   activity => activity.date === this.date
      // );
      searchFilters.push("date");
    }
    if (this.type) {
      filterResults = filterResults.filter(
        activity => activity.type === this.type
      );
      searchFilters.push("playType");
    }
    if (this.traffic) {
      filterResults = filterResults.filter(
        activity => activity.traffic === this.traffic
      );
      searchFilters.push("trafficType");
    }
    if (this.manager) {
      filterResults = filterResults.filter(
        activity => activity.manager.toLowerCase().includes(this.manager.toLowerCase())
      );
      searchFilters.push("manager");
    }
    this.navCtrl.push(ResultsPage, {
      results: filterResults,
      searchFilters: searchFilters
    });
  }

  ionViewDidLoad() {
  }

  between(x: number, min: number, max: number) {
    return x >= min && x <= max;
  }
}
