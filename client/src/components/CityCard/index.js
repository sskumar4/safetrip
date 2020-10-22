import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';

function CityCard(props) {
  console.log('CityCard:loggedIn', props.userLoggedIn)
  return (
    <div className="card">
      <div className="img-container">
      <h6><strong>City Safety Rating</strong></h6>
      </div>
      <div className="content">
        
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
      </div>
      {props.userLoggedIn && props.removeButton && <span onClick={() => props.removeCity(props.id)} className="remove"> X
      </span>}
      {props.userLoggedIn && props.saveButton && <span onClick={() => props.saveFunc(props.id)} className="remove"> Save City
      </span>}
      {(!(props.userLoggedIn))  && <span><h6><Link to="/signup">Sign up</Link> or <Link to="/login">Login</Link> save to wishlist</h6>
      </span>}
    </div>
  );
}

export default CityCard;
