import faker from "faker";
import moment from "moment";

import { pools } from "./pools";
import {
  Activity,
  PunctualActivity,
  SubscriptionActivity
} from "../../../../common/activity";
import { Location } from "../../../../common/location";

export const mockActivities: Activity[] = [];
const mockPools: Location[] = pools.places.map(pool => {
  const p = {
    address: pool.properties.ADRESSE,
    name: pool.properties.NOM,
    email: faker.internet.email(),
    activities: [],
    phoneNumber: faker.phone.phoneNumber()
  } as Location;

  return p;
});

const poolActivities = [
  "free swimming",
  "children's pool",
  "waterpolo",
  "synchronized swimming",
  "free diving",
  "racing"
];

const trafficTypes = ["Usually empty", "Some waiting time", "Very busy"];

mockPools.forEach((pool: Location) => {
  const date = moment().add(Math.floor(Math.random() * 30), "days");
  mockActivities.push({
    description: faker.lorem.paragraph(),
    sport: poolActivities[Math.floor(Math.random() * poolActivities.length)],
    location: pool,
    type: Math.random() < 0.5 ? "class" : "free",
    manager: faker.name.firstName() + " " + faker.name.lastName(),
    traffic: trafficTypes[Math.floor(Math.random() * trafficTypes.length)],
    imgUrl: faker.image.fashion(),
    price: faker.finance.amount(),
    time: {
      startTime: date.toDate(),
      endTime: date.add(Math.floor(Math.random() * 3), "hours").toDate()
    }
  } as PunctualActivity);
});

export const mockLocation: Location = {
  activities: [],
  name: "Chez marcus",
  address: "environ",
  phoneNumber: "+1 514 322 4221",
  email: "marcus.phan@polymtl.ca"
};

export const mockPunctualActivity: PunctualActivity = {
  sport: "Basukettuboru",
  location: mockLocation,
  price: 5,
  time: {
    dotw: "Sunday",
    startTime: moment()
      .add(1, "days")
      .toDate(),
    endTime: moment()
      .add(1, "days")
      .add(2, "hours")
      .toDate()
  },
  manager: "Michel Gagnon",
  traffic: "moderate",
  type: "free play",
  description: "fasdf asdf asd f asdfas dcanoiszhalsdn sopd g$%^#$W",
  imgUrl: faker.image.sports()
};

export const mockSubscriptionActivity: SubscriptionActivity = {
  sport: "Socceru",
  location: mockLocation,
  price: 115,
  period: {
    startTime: new Date(),
    endTime: moment()
      .add(3, "months")
      .toDate()
  },
  manager: "Zinedine Zidane",
  traffic: "none",
  type: "free play",
  description: "fasdf asdf asd f asdfas dcanoiszhalsdn sopd g$%^#$W",
  times: [
    { dotw: "Sunday", startTime: new Date(), endTime: new Date() },
    { dotw: "Moday", startTime: new Date(), endTime: new Date() },
    { dotw: "Friday", startTime: new Date(), endTime: new Date() }
  ],
  imgUrl: faker.image.sports()
};

export const mockLocations: Location[] = [mockLocation, ...mockPools];
mockActivities.push(mockPunctualActivity, mockSubscriptionActivity);
