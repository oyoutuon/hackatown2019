import { Location, mockLocation } from "./location";

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

export const mockPunctualActivty: PunctualActivity = {
  sport: "Basukettuboru",
  location: mockLocation,
  price: 5,
  time: { dotw: "Sunday", startTime: new Date(), endTime: new Date() },
  manager: "Michel Gagnon",
  traffic: "moderate",
  type: "free play",
  description: "fasdf asdf asd f asdfas dcanoiszhalsdn sopd g$%^#$W",
  imgUrl:
    "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
};

export const mockSubscriptionActivty: SubscriptionActivity = {
  sport: "Socceru",
  location: mockLocation,
  price: 115,
  period: { startTime: new Date(), endTime: new Date() },
  manager: "Zinedine Zidane",
  traffic: "none",
  type: "free play",
  description: "fasdf asdf asd f asdfas dcanoiszhalsdn sopd g$%^#$W",
  times: [
    { dotw: "Sunday", startTime: new Date(), endTime: new Date() },
    { dotw: "Moday", startTime: new Date(), endTime: new Date() },
    { dotw: "Friday", startTime: new Date(), endTime: new Date() }
  ],
  imgUrl:
    "https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
};

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
