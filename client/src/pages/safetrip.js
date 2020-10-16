import React, { Component } from "react";
import Form from '../components/Form';
import "../stylesheets/style.css";
 
const Safetrip = () => {
    return (
      
      <div className="container-fluid col-md-11 mt-5">
        <h4>Welcome to SafeTrip</h4>
        <p>Want to find the safety rating for a city you want to travel?</p> 
        <Form />        
        </div>
      
    );
  }


export default Safetrip;