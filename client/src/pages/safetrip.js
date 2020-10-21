import React, { Component } from "react";
import Form from '../components/Form';
import '../stylesheets/style.css';
import { useStoreContext } from '../store/store';

const Safetrip = () => {

  const [state, dispatch] = useStoreContext();


    return (
      <div className="container-fluid col-md-10 mt-5 bg">
        <h4>Welcome {state.user && state.user.username.split("@")[0]} to SafeTrip</h4>
        <p className="center text">Want to find the safety rating for a city you want to travel?</p>
        <div className="center">
          <Form />
        </div>
      </div>
    );
  }
export default Safetrip;