import axios from "axios";

export default {

  getCitySC: function() {
    return axios.get("/api/users/citySafetyScore");
  },
  
  getCities: function() {
    return axios.get("/api/users/safeCities");
  },
  
   deleteCity: function(id) {
     console.log("API. delete City: id???", id);
     return axios.put("/api/users/removeCity", { cityId:id});
   },
 
  saveSafeCity: function(cityData) {
    return axios.put("/api/users/saveCity", cityData);
  },

  saveNotes: function(cityId, notes) {
    return axios.put("/api/users/saveNotes", {editInfo: {cityId:cityId, visitNotes: notes}});
  }
};