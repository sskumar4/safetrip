const mongoose = require("mongoose");
const db = require("../database/models");

// This seed file empties the Users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/User", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const userSeed = [
  {
    username: "1234@mail.com",
    password: "1234",
    cities: [
      {
        name: "Bangalore",
        scLgbtq: 30,
        scMedical:30 ,
        scOverall: 30,
        scPhysicalHarm: 30,
        scPoliticalFreedom: 30,
        scTheft: 30,
        scWomen: 30,
        visited: false,
        visitNotes: "Best Place"
      },
      {
        name: "Barcelona",
        scLgbtq: 30,
        scMedical:30 ,
        scOverall: 30,
        scPhysicalHarm: 30,
        scPoliticalFreedom: 30,
        scTheft: 30,
        scWomen: 30,
        visited: false,
        visitNotes: "Best Place"
      }
    ]
  },
];

db.User.deleteMany({})
  .then(() => db.User.insertMany(userSeed))
  .then((data) => {
    console.log('data', data);
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });