const express = require('express');
const router = express.Router();
// -- begin geocoding
const NodeGeocoder = require('node-geocoder');
// -- begin Amaedeus
let Amadeus = require("amadeus");
let amadeus = new Amadeus({
  clientId: "sUAyDrSxoGCj56mOBwSk0HZkcKvSMwaM",
  clientSecret: "iLaaA0Tho8mG7AAm"
});
 
const options = {
  provider: 'google',
 
  // Optional depending on the providers
  // fetch: customFetchImplementation,
  apiKey: 'AIzaSyCfDYADGJE3VqDySqGIaOEm11YWCi-4nDs', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

async function getMyGeoCode(cityName) {
const res = await geocoder.geocode(cityName);
console.log('res',res);
console.log('res.lat', res[0].latitude, 'res.long', res[0].longitude);
return res;
};
 
const User = require('../../database/models/user');
const passport = require('../../passport');

router.post('/', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log('User Create Error: ', err);
      return;
    }

    if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }

    const newUser = new User({
      username: username,
      password: password,
    });

    newUser.save((err, savedUser) => {
      if (err) return res.json(err);

      res.json(savedUser);
    });
  });
});

router.post(
  '/login',
  (req, res, next) => {
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('LOGGED IN', req.user);
    res.send({
      username: req.user.username,
    });
  }
);

router.get('/', (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.status(200).json({ msg: 'LOGGED OUT' });
  } else {
    res.status(404).json({ msg: 'NO USER TO LOGOUT' });
  }
});

// To find saftey score of a city

router.get("/citySafetyScore", async function(req, res) {
  // First extract city Name from the req
  // Do geocoding and get lat, long from geocoding API
 

  console.log('city',req.query.city)

  let city=req.query.city;
    // let result = await getMyGeoCode(req.body.city);
    let result = await getMyGeoCode(city);
 console.log('result',result);
 console.log ('lat', result[0].latitude);
 console.log ('long', result[0].longitude);
 
 // call Amadeus  API to get safety score
 amadeus.safety.safetyRatedLocations.get({
   latitude: result[0].latitude,
   longitude: result[0].longitude,
 }).then(function (response) {
   console.log('success-response',response);
   res.json(response.data[0]);
 }).catch(function (err) {
   console.error('error-response',err);
 });
});

// save city to db route
router.put("/saveCity", (req, res) => {
  if (req.user) {
    //add items to document
    User.findOneAndUpdate(
      { username: req.user.username },
      { $push: { cities: req.body.city } },
      { safe: true, upsert: true, new: true, runValidators: true }
    )
      .then((response) => {
        console.log('response',response);
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.status(404).json({ msg: "NO USER LOGGED IN" });
  }
});

//remove city from database
router.put("/removeCity", (req, res) => {
  if (req.user) {
    //del items to document
    User.findOneAndUpdate(
      { username: req.user.username },
      { $pull: { cities: { _id: req.body.cityId } } },
      { safe: true, upsert: true }
    )
      .then((response) => {
        console.log('response',response)
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.status(404).json({ msg: "NO USER LOGGED IN" });
  }
});

// return safe cities 
router.get("/safeCities", (req, res) => {
  //check to see if user is logged in 
  if (req.user) {
    //fetch saved cities  from this user only
    User.findOne(
      { username: req.user.username }

    ).then(dbUser => {
      console.log(`successfully fetched safe cities from ${req.user.username}`);
      res.json([dbUser.cities, req.user]);
    }).catch(err => {
      res.json(err);
    });
  }
});

module.exports = router;
