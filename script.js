const apiKey = "c0169abcb701112dd9c725ec1942764c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
//const countryElement = document.getElementById("country");
const windElement = document.getElementById("wind")

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location);
  }else{
    alert('Please enter a location!')
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    //   locationElement.textContent = data.name;
    //   countryElement.textContent = data.sys.country;
        locationElement.textContent = data.name + ", " + data.sys.country;

      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description + ' with ';

if (data.wind.speed >= 0 && data.wind.speed < 2) {
    windElement.textContent = "Calm wind";
} else if (data.wind.speed >= 2 && data.wind.speed < 4) {
    windElement.textContent = "Light wind";
} else if (data.wind.speed >= 4 && data.wind.speed < 6) {
    windElement.textContent = "Moderate wind";
} else if (data.wind.speed >= 6 && data.wind.speed < 8) {
    windElement.textContent = "Slight strong wind";
} else if (data.wind.speed >= 8 && data.wind.speed < 10) {
    windElement.textContent = "Strong";
} else if (data.wind.speed >= 10) {
    windElement.textContent = "Storm";
} else {
    windElement.textContent = "Unknown"; // Handle unexpected wind speed values
}
 
      
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
