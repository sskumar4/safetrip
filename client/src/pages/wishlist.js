import React, {   useState, useEffect} from "react";
import API from "../utils/API";
import CityCard from "./../components/CityCard";
import Wrapper from "./../components/Wrapper";
// import {useHistory} from 'react-router-dom';

function Wishlist(loggedIn) {
  // const history = useHistory();

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

return (
      <div className="container-fluid col-md-9 mt-5">
      <Wrapper>
        <h3>My Travel Destination Wish List</h3>
        <br />
        {cities.map(city => (
          <CityCard
            size="wishlist"
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
            notes={city.visitNotes}
            userLoggedIn={loggedIn}
            loadCities = {loadCities}
          />
        ))}
      </Wrapper>
      </div>
    );
  }

export default Wishlist;
