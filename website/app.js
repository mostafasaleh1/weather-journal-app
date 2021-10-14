/* Global Variables */
/**
 * Declaring the OpenWeatherMap's credentials.
 */
const key = "&appid=9a58e300e2613900f60cd02f3a331e03&units=imperial"; // this is the default secure key of the api for my account.
const localhostUrl = "http://localhost:1999/";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?zip="; // this is the base URL for the local server.

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear(); // i've added one to the month bit because the getmonth() function in javascript starts from zero while the year and day start from one.



/**
 * Writing an async function that uses fetch() to make a GET request to the OpenWeatherMap API.
 */
 async function fetchApiData(userEnteredZipCode, apiKey) { // this function is used to fetch the data from the web api which is corresponding to the given zip code.
    let zipCodeData = await fetch(baseUrl+userEnteredZipCode+apiKey); // this is the combination of the baseUrl, zip code which is entered by the user and the apiKey provided, and all of that are the link to a specific zip code data on the openweathermap.org website api.
    return zipCodeData.json(); // fetching data from the from the api using the url and credential key provided, we've used await to wait until the data is present as there could be some delay.
}



/**
 * Creating an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
 */
 var button = document.getElementById('generate');
 button.addEventListener('click', () => { // when clicking on the button, the do the following function.
     emptyData(); // this function enables us to start over and makes the boxes empty for another input and output.
     let data = { // idenftifying the content of the data object which will be 
         userEnteredZipCode: document.getElementById("zip").value, // giving the property userEnteredZipCode the value of the zip in the textbox entered by the user.
         userResponse: document.getElementById("feelings").value, // giving the property content the value of the feelings text in the textbox entered by the user.
         date: newDate // determining the time now.
     };
 
     //Post Data To Api For Get Zip Code Information
     fetchApiData(data.userEnteredZipCode, key).then((zip) => { // fetching the data from the weather api using the above function.
         data.temp = zip.list[0].main.temp; // Posting Data to save and display in holder section using the bleow function post.
         POST(data); // usning function post.
     })
 });



 /**
  * chaining another Promise that makes a POST request to add the API data
  */
async function POST(data) { // this function is used to hold and save data.
    let res = await fetch(localhostUrl+"post", { //awaiting for the fetch from the server and then assigning it to the response variable which we will use later.
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), // converting the data variable to json.
    });
    try{res.json().then(data => { //converting data to json and then sending data to the 
        updateUI(); // calling the function upadateUI to update the ui at this moment.
    })
}
catch (error) {
    console.log("error", error); // catching error.
}
}



/**
 *  Updating UI 
 */
async function updateUI() { // chaining another Promise that updates the UI dynamically .
    let res = await fetch(localhostUrl+"all");
    try {
        res.json().then(data => {
            document.getElementById('date').textContent = `Date: ${data.date}`;
            document.getElementById('temp').textContent = `Temperature in Fehrinheit: ${data.temp}`; 
            document.getElementById('content').textContent = `Feeling: ${data.userResponse}`;
        })
    } 
    catch (error) {
        console.log("error", error);
    }
}



 function emptyData() {
    document.getElementById('date').textContent = "";
    document.getElementById('temp').textContent = "";
    document.getElementById('content').textContent = "";
    button.textContent = "Regenerate";
}