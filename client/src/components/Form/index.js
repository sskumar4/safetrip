import axios from 'axios';
import CityCard from '../CityCard';
import { useStoreContext } from '../../store/store';
import React, { useState } from 'react';
import './style.css';
import {Link,useHistory} from 'react-router-dom';


function Form (loggedIn) {
  const history = useHistory();
// Let us have cityInfo as a setState variable, set to empty object
const [searchCityName, setSearchCityName] = useState({
  "cityName":"",
});
const [citySafetyScores, setCitySafetyScores] = useState({});
const [state, dispatch] = useStoreContext();
console.log('State', state);
console.log('Form:loggedIn', loggedIn)
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
            // for (property in response.data.safetyScores) {
            //   switch (property) {
            //     case 'lgbtq':
            //       scLgbtq = response.safetyScores[property];
            //       console.log('lgbtq',scLgbtq);
            //       break;
            //     case 'medical':
            //      scMedical = response.safetyScores[property];
            //      console.log('medical',scMedical);
            //      break;
            //     case 'overall':
            //      scOverall = response.safetyScores[property];
            //      console.log('overall',scOverall);
            //      break;
            //     case 'physicalHarm':
            //     scPhysicalHarm = response.safetyScores[property];
            //     console.log('physcicalHarm',scPhysicalHarm);
            //     break; 
            //     case 'politicalFreedom':
            //      scPoliticalFreedom = response.safetyScores[property];
            //      console.log('politicalFreedom',scPoliticalFreedom);
            //      break;
            //     case 'theft':
            //      scTheft = response.safetyScores[property];
            //      console.log('theft',scTheft);
            //      break;
            //     case 'women':
            //     scWomen = response.safetyScores[property];
            //     console.log('women',scWomen);
            //     break; 
            //    default:
            //      console.log('default encountered');
            //      break;
            //   }
            // }



            //   setCitySafetyScores(...citySafetyScores, {
            //     lgbtq: scLgbtq,
            //     medical: scMedical,
            //     overall: scOverall,
            //     physicalHarm: scPhysicalHarm,
            //     politicalFreedom: scPoliticalFreedom,
            //     theft: scTheft,
            //     women: scWomen,
            //   } );
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
  <div className="col-md-5">
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
           <br />Please use the following cities for testing purposes:<br />
Bangalore, Barcelona, Berlin, Dallas, London, New York, San Francisco</p>
          
        </form>
        {citySafetyScores.overall && <CityCard 
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
         userLoggedIn = {loggedIn} 
         />}
        
      </div>
);
}
export default Form;