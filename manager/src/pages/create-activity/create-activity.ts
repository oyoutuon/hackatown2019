import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DateRange, Activity, SubscriptionActivity, PunctualActivity } from '../../../../common/activity';
import { HttpClient } from '@angular/common/http';
import { ActivityPage } from '../activity/activity';

const SERVER_URL = 'https://hackatown2019-server.herokuapp.com/';

@Component({
  selector: 'page-create-activity',
  templateUrl: 'create-activity.html'
})
export class CreateActivityPage {
  mockTypes = [
    'Freeplay',
    'Beginner Course',
    'Intermediate Course',
    'Advanced Course'
  ];

  activity: Activity = {
    sport: '',
    location: {
      'address': '1234 rue PolyWow',
      'name': '',
      'email': 'Zackery_Gleason@yahoo.com',
      'phoneNumber': '028.923.7795'
    },
    price: null,
    type: '',
    manager: '',
    description: '',
    traffic: '',
    imgUrl: '',
  }

  isSubscription: boolean;
  period: DateRange = { startTime: null, endTime: null };
  times: DateRange[] = [];
  time: DateRange = { startTime: null, endTime: null };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public http: HttpClient
  ) {
    let alert = this.alertCtrl.create({
      title: 'Choose Activity Type',
      buttons: [
        {
          text: 'Subscription',
          role: 'cancel',
          handler: () => {
            this.isSubscription = true;
            return true;
          }
        },
        {
          text: 'Punctual',
          role: 'cancel',
          handler: () => {
            this.isSubscription = false;
            return true;
          }
        }
      ]
    });
    alert.present();
  }

  onSubmit() {
    if (this.isSubscription) {
      (this.activity as SubscriptionActivity).period = this.period;
      (this.activity as SubscriptionActivity).times = this.times;
    }
    else {
      (this.activity as PunctualActivity).time = this.time;
    }

    const body: any = {
      'activity': this.activity
    }

    this.http.post(SERVER_URL + 'activity', body, { headers: { 'Content-Type': 'application/json' } })
      .toPromise()
      .then(() => console.log('POSTED activity'))
      .catch((e) => console.error(e));

    this.navCtrl.push(ActivityPage, { activity: body.activity });
  }

  ionViewDidLoad() {}
}
