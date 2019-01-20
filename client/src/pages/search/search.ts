import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  mockTypes = [
    'Freeplay',
    'Beginner Course',
    'Intermediate Course',
    'Advanced Course'
  ]

  mockTraffics = [
    'Usually Empty',
    'Some Waiting Time',
    'Very Busy'
  ]

  sport: string = 'BASUKETU';
  location: string = 'Chez marcus';
  price: number = 5;
  type: string = this.mockTypes[0];
  traffic: string = this.mockTraffics[0];
  manager: string = "Michel Gagnon";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
