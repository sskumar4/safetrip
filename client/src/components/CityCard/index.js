import React,  { useState } from "react";
import "./style.css";
import {Link,useHistory} from 'react-router-dom';
import { useStoreContext } from '../../store/store';
import API from "../../utils/API";


function CityCard(props) {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();
  console.log('CityCard:loggedIn', props.userLoggedIn)
  const [notes, setNotes] = useState({
    "notes":"",
  });

// saves a Note to the database with a given id, then reloads cities from the db
const saveNotes = (id) => {
  API.saveNotes(id,notes)
    .then(res => props.loadCities)
    .catch(err => console.log(err));
} 

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setNotes({ ...notes, [name]: value });
  console.log('notes', notes);
};

  return (
    <div className="card">
      <div className="img-container">
      <h6><strong>City Safety Rating</strong></h6>
      </div>
      <div className="content d-flex flex-wrap justify-content-around">
        <ul>
          <li>
            <strong>City Name:</strong> {props.name}
          </li>
          <li>
            <strong>Overall:</strong> {props.overall}
          </li>
          <li>
            <strong>Medical:</strong> {props.medical}
          </li>
          <li>
            <strong>Women:</strong> {props.women}
          </li>
          <li>
            <strong>Lgbtq:</strong> {props.lgbtq}
          </li>
          <li>
            <strong>Physical Harm:</strong> {props.physicalHarm}
          </li>
          <li>
            <strong>Political Freedom:</strong> {props.politicalFreedom}
          </li>
          <li>
            <strong>Theft:</strong> {props.theft}
          </li>
        </ul>
        {state.user && props.editButton &&
        <form>
         
          <textarea >
            {/* value={notes}
            name="notes"
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Visit Notes" */}
        </textarea>
        <br />
        <button onClick= {()=> {saveNotes(props.id, notes); history.push("/wishlist")}}>Edit/Save Notes</button>
        </form>}
        </div>
        
      {state.user && props.removeButton && <span onClick={() => props.removeCity(props.id)} className="remove"> X
      </span>}
      {state.user && props.saveButton && <span onClick={() => {props.saveFunc(props.id);
      history.push("/wishlist")}} className="remove"> Save City
      </span>}
      {(!(state.user))  && <span><h5><Link to="/signup">Sign up</Link> or <Link to="/login">Login </Link>to save to wishlist</h5>
      </span>}
    </div>
  );
}

export default CityCard;
