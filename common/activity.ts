import { Location } from "./location";

export interface Activity {
  sport: string;
  location: Location;
  price: number;
  type: string;
  traffic: string;
  manager: string;
  description: string;
  imgUrl: string;
}

export interface SubscriptionActivity extends Activity {
  period: DateRange;
  times: DateRange[];
}

export interface PunctualActivity extends Activity {
  time: DateRange;
}

export interface DateRange {
  dotw?: string;
  startTime: Date;
  endTime: Date;
}
