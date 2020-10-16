import axios from 'axios';
import React from 'react';
import './style.css';

function Form (props) {
return (
  <div className="col-md-5">
    <form className="form-box2">
      <label htmlFor="safeCity"><h6 style={{"fontWeight":"bold"}}>How safe is the city?</h6></label>
      <select name="cities" id="city-input">
       <option value="Bangalore">Bangalore, India</option>
       <option value="Barcelona Spain">Barcelona, Spain</option>
       <option value="Berlin">Berlin, Germany</option>
       <option value="Dallas">Dallas, Texas</option>
       <option value="London">London, United Kingdom</option>
       <option value="New York">New York, USA</option>
       <option value="San Fransisco">San Fransisco, USA</option>
      </select>
      <input className="pure-button pure-button-primary btn1" id="submit" type="submit" value="Submit"/>
    </form>
  </div>
);
}
export default Form;