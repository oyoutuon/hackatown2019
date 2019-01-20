import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { DateRange } from "../../../../common/activity";

@Component({
  selector: "page-create-activity",
  templateUrl: "create-activity.html"
})
export class CreateActivityPage {
  mockTypes = [
    "Freeplay",
    "Beginner Course",
    "Intermediate Course",
    "Advanced Course"
  ];

  sport: string = "";
  location: string = "";
  price: number;
  type: string = "";
  manager: string = "";
  description: string = "";
  isSubscription: boolean;
  period: DateRange = { startTime: null, endTime: null };
  times: DateRange[] = [];
  time: DateRange = { startTime: null, endTime: null };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    let alert = this.alertCtrl.create({
      title: "Choose Activity Type",
      buttons: [
        {
          text: "Subscription",
          role: "cancel",
          handler: () => {
            this.isSubscription = true;
            return true;
          }
        },
        {
          text: "Punctual",
          role: "cancel",
          handler: () => {
            this.isSubscription = false;
            return true;
          }
        }
      ]
    });
    alert.present();
  }

  onSubmit() {}

  ionViewDidLoad() {}
}
