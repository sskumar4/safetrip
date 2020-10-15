import React, { Component } from "react";
import Form from '../components/Form';
 
const Safetrip = () => {
    return (
      <div className="container-fluid col-md-10 mt-5">
        <h4>Welcome to SafeTrip</h4>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        <Form />
        <button>Sign-up</button>
        <button>login </button>

      </div>
    );
  }


export default Safetrip;