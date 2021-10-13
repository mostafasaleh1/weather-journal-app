/**
 * Setup empty JS object to act as endpoint for all routes.
 */
projectData = {};


/**
 * Require Express to run server and routes.
 */
const express = require("express"); // requiring express in our project's server-side code.


/**
 * Start up an instance of app
 */
const app = express(); // starting up the express framework instance inside our project.


/**
 * Middleware.
 */
/* 1- Here we are configuring express to use body-parser as middle-ware.*/
const bodyParser = require("body-parser"); // requiring body-parser in our project's server-side code.
/* 2- instructing out application to use the body parser package and do the next illustrated steps.*/
app.use(bodyParser.urlencoded({ extended: false })); // making body-parser use simple algorithm for parsing.
app.use(bodyParser.json()); // making the body-parser use the JavaScript Object Notation.


/**
 * Cors for cross origin allowance.
 */
const cors = require("cors"); // requiring CORS in our project's server-side code.
app.use(cors()); // Instructing our app to use the CORS package.


/**
 * Initialize the main project folder
 */
app.use(express.static('website')); // making access to the client-side code.


/**
 * Seting up Server.
 */
const port = 1999; // creating a port
app.listen(port, () => { // creating a variable called server and assigning this fuction to test if the server is running through node.js or not.
    console.log(`the server is running on localhost:${port}`); // printing that the server is running on local host of number = port.
});


/**
 * Creating a GET route.
 */
app.get("/all", (req, res) => { // This function indicates that whenever the link http://localhost:1999/all is visited the server would respond with the projectData object.
    res.send(projectData); 
});


/**
 * Creating a POST route.
 */
app.post("/post", (req, res) => { // // This function indicates that whenever the link http://localhost:1999/post is visited the server would respond with the projectData object.
    projectData = { // here we've changed the content of the projectData object to match the ruberic.
        temperature: req.body.temperature, // I've changed the content of the temperature property to match the body of the request.
        date: req.body.date, // I've changed the content of the date property to match the body of the request.
        userResponse: req.body.userResponse, // I've changed the content of the userResponse property to match the body of the request.
    };
    res.send(projectData);
});