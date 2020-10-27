import axios from 'axios';
import CityCard from '../CityCard';
import InfoCard from '../InfoCard';
import { useStoreContext } from '../../store/store';
import React, { useState } from 'react';
import './style.css';
import {Link,useHistory} from 'react-router-dom';


function Form (userLoggedIn) {
  const history = useHistory();
// Let us have cityInfo as a setState variable, set to empty object
const [searchCityName, setSearchCityName] = useState({
  "cityName":"",
});
const [citySafetyScores, setCitySafetyScores] = useState({});
const [state, dispatch] = useStoreContext();
console.log('State', state);
console.log('Form:loggedIn', userLoggedIn)
// let scLgbtq = 0;
// let scMedical =0;
// let scOverall = 0;
// let scPhysicalHarm = 0;
// let scPoliticalFreedom = 0;
// let scTheft = 0;
// let scWomen = 0;
const handleCitySearch = (event) => {
      event.preventDefault();
      // setShow(false);
      console.log('cityName-submit',searchCityName);
      axios
          .get('/api/users/citySafetyScore/', { 
              params: {city: searchCityName.cityName}
            }
          )
          .then((response) => {
            console.log('response', response);
            console.log('safetyScores', response.data.safetyScores);
            setCitySafetyScores(response.data.safetyScores);
            setCitySafetyScores(response.data.safetyScores);
               console.log('response',response);
               console.log('response.data',response.data);
              console.log('state var',citySafetyScores);
          })
          .catch((error) => {
              console.log(error);
          });
  };

  const handleCitySave = (event) => {
   // event.preventDefault();
    // setShow(false);
    console.log('cityName-submit',searchCityName);
    axios
        .put('/api/users/saveCity/', { 
            city : {
                name :searchCityName.cityName,
                scLgbtq: citySafetyScores.lgbtq,
                scMedical: citySafetyScores.medical,
                scOverall:  citySafetyScores.overall,
                scPhysicalHarm: citySafetyScores.physicalHarm,
                scPoliticalFreedom: citySafetyScores.politicalFreedom,
                scTheft: citySafetyScores.theft,
                scWomen: citySafetyScores.women,
                visited: citySafetyScores.visited,
                visitNotes: citySafetyScores.visitNotes
}            }
        )
       .then((response) => {
         console.log('response', response);
          console.log('safetyScores', response.data.safetyScores);
             
            console.log('state var',citySafetyScores);
        })
        .catch((error) => {
            console.log(error);
        });
};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchCityName({ ...searchCityName, [name]: value });
    console.log('cityName', searchCityName);
};

return (
  <div className="col-md-8
  ">
<form className="form-box2">
          <input
            value={searchCityName.cityName}
            name="cityName"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter City Name"
          />
          <button onClick={handleCitySearch}>Submit</button>
          <p className="text2">
           <br />Please enter the following cities for testing purposes:<br />Bangalore, Barcelona Spain, Berlin, Dallas, London, New York, San Francisco</p>
          
        </form>
        <div className="row">
        <div className="col-md-7">
        {citySafetyScores.overall && <CityCard 
         size="form"
         overall = {citySafetyScores.overall}
         medical = {citySafetyScores.medical}
         women = {citySafetyScores.women}
         lgbtq = {citySafetyScores.lgbtq}
         physicalHarm = {citySafetyScores.physicalHarm}
         politicalFreedom = {citySafetyScores.politicalFreedom}
         theft = {citySafetyScores.theft}
         name = {searchCityName.cityName}
         saveFunc = {handleCitySave}
         removeButton = {false}
         saveButton = {true}         
         />}
         </div>
         <div className="col-md-5">
         {citySafetyScores.overall && <InfoCard />
          }
         </div>
         </div>
         </div>
      
);
}
export default Form;