const faker = require("faker");
const moment = require("moment");

const pools = require("./pools").pools;
const parkActivities = require("./parks").parkActivities;
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const mockActivities = [];
const mockPools = pools.places.map(pool => {
  const p = {
    address: pool.properties.ADRESSE,
    name: pool.properties.NOM,
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber()
  };

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

const parkSports = [
  "tennis",
  "basketball",
  "soccer",
  "baseball",
  "volleyball",
  "pingpong",
  "bocce",
  "football"
];

const trafficTypes = ["Usually empty", "Some waiting time", "Very busy"];

const playTypes = [
  "Freeplay",
  "Beginner Course",
  "Intermediate Course",
  "Advanced Course"
];

mockPools.forEach(pool => {
  if (Math.random() > 0.8) {
    const date = moment().add(Math.floor(Math.random() * 30), "days");
    if (Math.random() > 0.5) {
      mockActivities.push({
        description: faker.lorem.paragraph(),
        sport:
          poolActivities[Math.floor(Math.random() * poolActivities.length)],
        location: pool,
        type: playTypes[Math.floor(Math.random() * playTypes.length)],
        manager: faker.name.firstName() + " " + faker.name.lastName(),
        traffic: trafficTypes[Math.floor(Math.random() * trafficTypes.length)],
        imgUrl: faker.image.nature(),
        price: parseFloat(faker.finance.amount()),
        time: {
          startTime: date.toDate(),
          endTime: date.add(Math.floor(Math.random() * 3), "hours").toDate()
        }
      });
    } else {
      const times = [];
      for (let index = 0; index < Math.random() * 2 + 2; index++) {
        times.push([
          {
            dotw: days[Math.floor(Math.random() * days.length)],
            startTime: date.toDate(),
            endTime: date.add(Math.floor(Math.random() * 3), "hours").toDate()
          }
        ]);
      }
      mockActivities.push({
        description: faker.lorem.paragraph(),
        sport:
          poolActivities[Math.floor(Math.random() * poolActivities.length)],
        location: pool,
        type: playTypes[Math.floor(Math.random() * playTypes.length)],
        manager: faker.name.firstName() + " " + faker.name.lastName(),
        traffic: trafficTypes[Math.floor(Math.random() * trafficTypes.length)],
        imgUrl: faker.image.nature(),
        price: parseFloat(faker.finance.amount()),
        times,
        period: {
          startTime: date.toDate(),
          endTime: date
            .add(Math.floor(Math.random() * 30) + 60, "days")
            .toDate()
        }
      });
    }
  }
});

const mockParks = [];

parkActivities.forEach(parkActivity => {
  const parkName =
    parkActivity.parks.nom_fr instanceof Array
      ? parkActivity.parks.nom_fr[0]
      : parkActivity.parks.nom_fr;
  const coords =
    parkActivity.parks.coordonnees instanceof Array
      ? parkActivity.parks.coordonnees[0]
      : parkActivity.parks.coordonnees;
  const [lat, lng] = coords.split(",").map(parseFloat);

  mockParks.push({
    name: parkName,
    email: faker.internet.email(),
    lat: lat,
    lng: lng,
    phoneNumber: faker.phone.phoneNumber()
  });
});

mockParks.forEach(park => {
  const date = moment().add(Math.floor(Math.random() * 30), "days");
  if (Math.random() < 0.5) {
    mockActivities.push({
      description: faker.lorem.paragraph(),
      imgUrl: faker.image.nature(),
      location: park,
      manager: faker.name.firstName() + " " + faker.name.lastName(),
      price: parseFloat(faker.finance.amount()),
      sport: parkSports[Math.floor(Math.random() * parkSports.length)],
      time: {
        startTime: date.toDate(),
        endTime: date.add(Math.floor(Math.random() * 3), "hours").toDate()
      },
      traffic: trafficTypes[Math.floor(Math.random() * trafficTypes.length)],
      type: playTypes[Math.floor(Math.random() * playTypes.length)]
    });
  } else {
    const times = [];
    for (let index = 0; index < Math.random() * 2 + 2; index++) {
      times.push([
        {
          dotw: days[Math.floor(Math.random() * days.length)],
          startTime: date.toDate(),
          endTime: date.add(Math.floor(Math.random() * 3), "hours").toDate()
        }
      ]);
    }
    mockActivities.push({
      description: faker.lorem.paragraph(),
      imgUrl: faker.image.image(),
      location: park,
      manager: faker.name.firstName() + " " + faker.name.lastName(),
      price: parseFloat(faker.finance.amount()),
      sport: parkSports[Math.floor(Math.random() * parkSports.length)],
      times,
      period: {
        startTime: date.toDate(),
        endTime: date.add(Math.floor(Math.random() * 30) + 60, "days").toDate()
      },
      traffic: trafficTypes[Math.floor(Math.random() * trafficTypes.length)],
      type: playTypes[Math.floor(Math.random() * playTypes.length)]
    });
  }
});

const mockLocations = [...mockParks, ...mockPools];

module.exports = {
  mockActivities,
  mockLocations
};
