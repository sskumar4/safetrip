import React, { Component } from "react";
import Wrapper from '../components/Wrapper';
import '../stylesheets/style.css';
import sudha from '../images/sudha.jpg';

 
const About = () => {
    return (
      <div className="container-fluid col-md-4 mt-5">
        <h3>About</h3>
        <Wrapper>        
        {/* <div className="left"> */}
        <h5>About the App</h5>
        <p>SafeTrip is a full stack react js/ mongo application that finds the safety score of a given destination. The application allows the user to sign up or login and save the city as a wish list, retrieve the list, delete a city from the list and add travel notes about the destination.
        </p>
        {/* </div> */}
         </Wrapper> 
         <Wrapper> 
        {/* <div className="right"> */}
        <h5>About the Author</h5>
        <p><img src={sudha} alt="Author image" />Front-end web developer/Graphic designer with more than five years of experience. Passionate about creating meaningful web applications. With each project, my aim is to best engage the audience for an impactful user experience.
        </p>
        {/* </div> */}
        </Wrapper>
        <br />
      </div>
    );
  }


export default About;
