/* Global Variables */
/**
 * Declaring the OpenWeatherMap's credentials.
 */
const apiKey = "9a58e300e2613900f60cd02f3a331e03"; // this is the default secure key of the api for my account.
const baseUrl = "http://localhost:1999/"; // this is the base URL for the local server.

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();