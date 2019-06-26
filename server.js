//node-fetch is the node.js version of the fetch provided by the browser
var fetch = require("node-fetch");

//using async await
//async functions are used to group promises
//they return a promise on the fullfillment of every promise inside the the async function tagged with the 'await expression
async function getWeather() {
  //wait for the server to return the data
  const response = await fetch(
    "https://www.metaweather.com/api/location/28743736/"
  );
  //wait for the response to parse
  const data = await response.json();
  return data;
}

//consume the promise
getWeather().then(data => {
  //using the map method defined in the array.prototype to filter the array.
  let weatherInfo = data["consolidated_weather"].map(weather => {
    return weather["weather_state_name"];
  });
  console.log(weatherInfo);
});
