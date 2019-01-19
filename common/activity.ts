import { Location } from "./location";

export interface Activity {
  sport: string;
  location: Location;
  price: number;
  date: Date;
  time: TimeRanges;
  type: string;
  traffic: string;
  manager: string;
}

export interface SubscriptionActivity extends Activity {}

export interface PunctualActivity extends Activity {}
