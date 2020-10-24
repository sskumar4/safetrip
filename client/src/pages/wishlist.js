import React, {   useState, useEffect, Component } from "react";
import API from "../utils/API";
import CityCard from "./../components/CityCard";
import Wrapper from "./../components/Wrapper";
import Title from "./../components/Title";
import cities from "./../cities.json";
import {Link,useHistory} from 'react-router-dom';
import { Input, TextArea, FormBtn } from "../components/Form";


function Wishlist(loggedIn) {
  const history = useHistory();

// Setting our component's initial state
const [cities, setCities] = useState([])
const [formObject, setFormObject] = useState({})

  // Load all cities and store them with setCities
  useEffect(() => {
    loadCities()
  }, [])

  // Loads all cities and sets them to cities
  function loadCities() {
    API.getCities()
      .then(res => {
        console.log('wishlist - res',res.data[0]);
        setCities(res.data[0])
      }
      )
      .catch(err => console.log(err));
  };

 // Deletes a city from the database with a given id, then reloads cities from the db
  const delCity = (id) => {
  API.deleteCity(id)
    .then(res => loadCities())
    .catch(err => console.log(err));
} 


 // Handles updating component state when the user types into the input field
 function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
};

 // When the form is submitted, use the API.saveCity method to save the city data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveCity({
        name: formObject.name,
        overall: 40
      })
        .then(res => loadCities())
        .catch(err => console.log(err));
    }
  };


    return (
      <div className="container-fluid col-md-9 mt-5">
      <Wrapper>
        <h3>My Travel Destination Wish List</h3>
        {cities.map(city => (
          <CityCard
            removeButton={true}
            saveButton={false}
            editButton={true}
            removeCity = {delCity}
            notes={city.visitNotes}
            id={city._id}
            key={city._id}
            name={city.name}
            overall={city.scOverall}
            medical={city.scMedical}
            women={city.scWomen}
            lgbtq={city.scLgbtq}
            physicalHarm={city.scPhysicalHarm}
            politicalFreedom={city.scPoliticalFreedom}
            theft={city.scTheft}
            userLoggedIn={loggedIn}
            loadCities = {loadCities}
          />
        ))}
      </Wrapper>
      </div>
    );
  }


export default Wishlist;
