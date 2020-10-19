import React, { Component } from "react";
import Form from '../components/Form';
import '../stylesheets/style.css';
 
const Safetrip = () => {
    return (
      <div className="container-fluid col-md-10 mt-5 bg">
        <h4>Welcome to SafeTrip</h4>
        <p className="center text">Want to find the safety rating for a city you want to travel?</p>
        <div className="center"><Form /></div>
      </div>
    );
  }
export default Safetrip;