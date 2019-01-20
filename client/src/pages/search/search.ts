import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { mockActivities } from '../../assets/data/mocks';
import { ResultsPage } from '../results/results';

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

  sport: string = '';
  location: string = '';
  price: number;
  type: string = '';
  traffic: string = '';
  manager: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit($event) {
    let filterResults = mockActivities;
    if (this.sport) {
      filterResults = filterResults.filter(activity => activity.sport === this.sport);
    } 
    if (this.location) {
      filterResults = filterResults.filter(activity => activity.location.name === this.location);
    }
    if (this.price !== undefined && this.price !== null) {
      filterResults = filterResults.filter(activity => activity.price === this.price);
    }
    if (this.type) {
      filterResults = filterResults.filter(activity => activity.type === this.type);
    }
    if (this.traffic) {
      filterResults = filterResults.filter(activity => activity.traffic === this.traffic);
    }
    if (this.manager) {
      filterResults = filterResults.filter(activity => activity.manager === this.manager);
    }
    this.navCtrl.push(ResultsPage, {results: filterResults});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
