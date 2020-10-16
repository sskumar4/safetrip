import axios from "axios";

export default {
  // Gets all books
  getCitySC: function() {
    return axios.get("/api/users/citySafetyScore");
  },
  // Gets the book with the given id
  getSafeCities: function() {
    return axios.get("/api/users/safeCities");
  },
  // Deletes the book with the given id
  // deleteCity: function(id) {
  //   return axios.delete("/api/users/" + id);
  // },
  // Saves a book to the database
  saveSafeCity: function(cityData) {
    return axios.post("/api/users/saveCity", cityData);
  }
};