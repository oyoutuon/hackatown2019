import faker from "faker";
import moment from "moment";
// import { parseString } from "xml2js";

import { pools } from "./pools";
import {
  Activity,
  PunctualActivity,
  SubscriptionActivity
} from "../../../common/activity";
import { Location } from "../../../common/location";

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

mockPools.forEach((pool: Location) => {
  // bain libre
  // pateaugoire libre
  // waterpolo
  // synchronizedswimming
  // race
});

export const mockLocation: Location = {
  activities: [],
  name: "Chez marcus",
  address: "environ",
  phoneNumber: "+1 514 322 4221",
  email: "marcus.phan@polymtl.ca"
};

export const mockPunctualActivty: PunctualActivity = {
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

export const mockSubscriptionActivty: SubscriptionActivity = {
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
export const mockAvtivities: Activity[] = [
  mockPunctualActivty,
  mockSubscriptionActivty
];
