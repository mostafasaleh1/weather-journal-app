// Setup empty JS object to act as endpoint for all routes
projectData = {};

/**
 * Require Express to run server and routes
 */
const express = require("express"); // requiring express in our project's server-side code.

/**
 * Start up an instance of app
 */
const app = express(); // starting up the express framework instance inside our project.

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false })); // making body-parser use simple algorithm for parsing.
app.use(bodyParser.json()); // making the body-parser use the JavaScript Object Notation.

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website')); // making access to the client-side code.


// Setup Server