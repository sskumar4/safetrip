## Project Name: SafeTrip


 [![Thumbnail](/client/src/images/safetrip-thumb.png)](https://safer-trip.herokuapp.com/)


## Table of Contents

<!-- vscode-markdown-toc -->
* 1. [Link repository](#Linktorepository)
* 2. [Introduction](#Introduction)
* 3. [Technologies](#Technologies)
* 4. [Files](#Files)
* 5. [Features](#Features)
* 6. [Future Development](#FutureDeveloment)
* 7. [Launch](#Launch)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='Linktorepository'></a>Link to repository

* [Repository](https://github.com/sskumar4/safetrip)
* [Link to deployment](https://safer-trip.herokuapp.com/)
  
##  2. <a name='Introduction'></a>Introduction   

SafeTrip is an application that finds the safety score of a given destination and allows the user to save the destination in a wish list as a future travel destination. The app allows the user to delete the saved city and enter travel notes for the city in the wish list page. The homepage is presented with an input/search box to enter the destination city and the safety score rating is displayed in the same page along with the score legend below the input box. The user is provided with an option to to login or sign up to save the city in a wish list for future reference.

After logging in, when the user enters the destination city in the search box, the safety score is displayed and a Save City button is provided at the top of the card to save the city in a wish list.

The wish list page displays the saved city in a card with a delete button at the top. A text area is provided to enter travel notes which is saved in the database.

'SafeTrip' is a full stack MERN app. The Front End takes user input using ReactJS  and queries/stores info to/at the back-end. The back-end processes the API routes, makes queries to Amadeus/Google geocode API and sends back the JSON results. It is possible to accept user input as to save a desired safe city in the wishlist database at the back end. Also saved city can be deleted or edited to add/edit visitNotes of the user. The front-end and back-end also has functionality that implements passport based user signup/login using react and mongo db that was provided with the starter files. The started db is extended to hold Cities information. The API routes are suitably extended to allow  CRUD operations to be done on the cities sub-document.

##  3. <a name='Technologies'></a>Technologies 
React, Express, mongo, node JS,  html, CSS, BootStrap CSS, 
Heroku 

API: Amadeus API to get safety score and Google geocode API to get the lat, long of the city

NPM packages:

##  4. <a name='Files'></a>Files

js files:
 * Front-end: Created wishlist.js,safetrip.js, about.js, modified navbar.js
 * modified api/routes/users.js, server.js, database/model/user.js (back-end), 
 * seed.js
Other files:
*Front End: several react component files with associated styles, 

##  5. <a name='Features'></a>Features

### App Setup
Either you can clone the repository and run locally By
 a) Create a GitHub repo and clone it to your computer.
 b) run `npm i` to install all npm package dependecies.
 c) run `npm start` to run the app.

Or Visit heroku at safer-trip.herokuapp.com to use the app.

## 6. <a name='Future Development'></a>Future Development
As a future development,
 1.  The app will be able to find and save sightseeing attractions around the safe city

## 7. <a name='Launch'></a>Launch

* Deployed Heroku link to the app: https://safer-trip.herokuapp.com/
  
