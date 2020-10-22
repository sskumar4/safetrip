import axios from "axios";

export default {

  getCitySC: function() {
    return axios.get("/api/users/citySafetyScore");
  },
  
  getCities: function() {
    return axios.get("/api/users/safeCities");
  },
  
   deleteCity: function(id) {
     return axios.put("/api/users/removeCity", { cityId:id});
   },
 
  saveSafeCity: function(cityData) {
    return axios.put("/api/users/saveCity", cityData);
  }
};