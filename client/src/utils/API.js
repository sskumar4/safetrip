import axios from "axios";

export default {

  getCitySC: function() {
    return axios.get("/api/users/citySafetyScore");
  },
  
  getSafeCities: function() {
    return axios.get("/api/users/safeCities");
  },
  
  // deleteCity: function(id) {
  //   return axios.delete("/api/users/" + id);
  // },
 
  saveSafeCity: function(cityData) {
    return axios.post("/api/users/saveCity", cityData);
  }
};