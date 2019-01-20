import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { Activity } from "../../../common/activity";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  state = "map";
  states = ["map", "time", "sport", "type"];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartData: any[];
  public barChartType = "bar";
  public barChartLegend = false;

  // Doughnut
  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType = "doughnut";

  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];

  public lineChartType = "line";
  public pieChartType = "pie";

  lat = 45.5017;
  lng = -73.5673;
  locations;
  activities;

  constructor(public dataProvider: DataService) {}

  async ngOnInit() {
    this.activities = await this.dataProvider.getActivities();
    this.locations = await this.dataProvider.getLocations();
    const sports = {};
    const typeOfActivities = {};
    this.activities.forEach((activity: Activity) => {
      if (activity.sport in sports) {
        sports[activity.sport] += 1;
      } else {
        sports[activity.sport] = 1;
      }

      if (activity.type in typeOfActivities) {
        typeOfActivities[activity.type] += 1;
      } else {
        typeOfActivities[activity.type] = 1;
      }
    });

    this.barChartLabels = Object.keys(typeOfActivities);
    this.barChartData = Object.values(typeOfActivities);
    this.doughnutChartLabels = Object.keys(sports);
    this.doughnutChartData = Object.values(sports);
  }

  setState(state) {
    this.state = state;
  }
}
