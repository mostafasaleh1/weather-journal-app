/* Global Variables */
/**
 * Declaring the OpenWeatherMap's credentials.
 */
const apiKey = "9a58e300e2613900f60cd02f3a331e03"; // this is the default secure key of the api for my account.
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?zip="; // this is the base URL for the local server.

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



/**
 * Writing an async function that uses fetch() to make a GET request to the OpenWeatherMap API.
 */
async function fetchApiData(zipcode) { // this function is used to fetch the data from the web api which is corresponding to the given zip code.
    let zipCodeData = await fetch(baseUrl+zipCode+apiKey);
    return zipCodeData.json(); // fetching data from the from the api using the url and credential key provided, we've used await to wait until the data is present as there could be some delay.
}
