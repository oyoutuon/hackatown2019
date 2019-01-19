import { Location, mockLocation } from "./location";

export interface Activity {
  sport: string;
  location: Location;
  price: number;
  startTime: Date;
  endTime: Date;
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
  startTime: new Date(),
  endTime: new Date(),
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
  startTime: new Date(),
  endTime: new Date(),
  manager: "Zinedine Zidane",
  traffic: "none",
  type: "free play",
  description: "fasdf asdf asd f asdfas dcanoiszhalsdn sopd g$%^#$W",
  imgUrl:
    "https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
};

export interface SubscriptionActivity extends Activity {}

export interface PunctualActivity extends Activity {}
