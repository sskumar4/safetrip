const router = require('express').Router();
const userRoutes = require('./users');

router.use('/users', userRoutes);

// -- begin Amaedeus
let Amadeus = require("amadeus");
let amadeus = new Amadeus({
  clientId: "sUAyDrSxoGCj56mOBwSk0HZkcKvSMwaM",
  clientSecret: "iLaaA0Tho8mG7AAm"
});

router.get("/api/users/citySafetyScore", async function(req, res) {
  // First extract city Name from the req
  // Do geocoding and get lat, long from geocoding API
  
 
  console.log('req.query.city', req.query.city);
    let result = await getMyGeoCode(req.query.city);
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
 
   router.put("/api/users/saveCity", function(req, res) {
     if (req.user) {
     console.log('user!!!',req.user);
     
     console.log('In route - api/citySafetyScore');
     console.log('req.body',req.body);
     console.log(req.user);
     db.City.create({
       name: req.body.city,
       scLgbtq: req.body.scLgbtq,
       scMedical: req.body.scMedical,
       scOverall: req.body.scOverall,
       scPhysicalHarm: req.body.scPhysicalHarm,
       scPoliticalFreedom: req.body.scPoliticalFreedom,
       scTheft: req.body.scTheft,
       scWomen:req.body.scWomen,
       UserId: req.user.id
 
     })
       .then(function(data) {
         res.json(data);
       })
       .catch(function(err) {
         res.status(401).json(err);
       });
     }
     });
 
     //render all saved safe cities
     router.get("/api/users/safeCities", async (req, res) => {
       console.log("IN GET SAVEDSAFECITIES");
       console.log(req.body);
       let userid =1;
       if (req.user) {
       let user = await db.User.findOne(
         { where: { 
           email: req.user.email 
         } 
       });
       userid = user.id;
       console.log('userid to be passed to city table query--1',userid);
       let dbcity = await db.City.findAll({
         // where: {
         //   // UserId: userid
         // }
       });
       // db.City.findAll().then(function( data){
       //   console.log('data',data);
       //   //let test = [{test:"test"}];
       //   let test = {test: [{value: "hello"}]}
       //   res.render("wishlist", test);
       // })
 
        //   console.log('dbcity',dbcity);
          
 
       } else {
         res.status(401).json(err);
       }


module.exports = router;
