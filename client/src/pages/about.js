import React, { Component } from "react";
import Wrapper from '../components/Wrapper';
import '../stylesheets/style.css';
import sudha from '../images/sudha.jpg';

 
const About = () => {
    return (

      <div className="container-fluid col-md-8 mt-5">
        <Wrapper>
        <h3>About</h3>
        <p><h5>About the App</h5>
        SafeTrip is a react js application that finds the safety score of a given destination. The application allows the user to sign-up and save the city as a wish list, retrieve, delete a city from the wish list and add a travelogue about the destination.
        </p>
        <p><h5>About the Author</h5>
        <img src={sudha} alt="Author image" />Front-end web developer/Graphic designer with more than five years of experience. Excellent interpersonal and time management skills with a positive attitude and ability to work with people at all levels. Passionate about creating meaningful web applications. Excited to develop responsive websites. Known as an innovative problem solver with excellent creativity and passionate about developing apps. With each project, my aim is to best engage the audience for an impactful user experience. Applied aspects of UX and agile development in a recent project. I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web. Soon to graduate in full stack development from UNC Friday Center Bootcamp with newly developed skills in JQuery, AJAX, React, MySQL, Sequelize, Node, MongoDB and Express, Heroku.
        </p>
        </Wrapper>
      </div>
    );
  }


export default About;
