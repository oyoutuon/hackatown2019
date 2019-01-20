const mocks = require("./mocks");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://marcus:123456a@ds161764.mlab.com:61764/hackatown2019";

MongoClient.connect(
  url,
  function(err, client) {
    client
      .db()
      .collection("locations")
      .insertMany(mocks.mockLocations)
      .then(res => {
        console.log("inserted successfully");
      })
      .catch(err => {
        console.log("an error occurred");
      });
    client.close();
  }
);
