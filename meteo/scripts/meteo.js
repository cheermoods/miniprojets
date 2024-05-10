/*-- Test
// Récupérer les données-meteo de la ville
let cityData;
for (let i = 0; i < cities.length; i++) {
  if (cities[i].name === cityName) {
    cityData = cities[i];
    break;
  }
}
*/

/*Remplacer les valeurs par défaut du html*/
function displayWeather(cityData) {
  const cityNameElement = document.getElementById("city-name");
  const cityTempElement = document.getElementById("city-temp");
  const cityHumidityElement = document.getElementById("city-humidity");

  cityNameElement.textContent = cityData.name;
  cityTempElement.textContent = cityData.temperature;
  cityHumidityElement.textContent = cityData.humidity;
}

/*--Test
// Afficher les données-meteo de la ville test
displayWeather(cityData);
*/

/*
//Afficher les données-meteo de la ville sans maj
getWeather(cityName)
  .then((cityData) => {
    console.log("Données météorologiques :", cityData);
    displayWeather(cityData);
  });
*/

/*Rafraîchir puis afficher les données-meteo*/
function refreshAndDisplayWeather(cityName) {
  getWeather(cityName).then((cityData) => {
    console.log("MAJ Données météorologiques :", cityData);
    displayWeather(cityData);
  });
}

// Rafraîchir les données-meteo toutes les heures
setInterval(() => {
  refreshAndDisplayWeather(cityName);
}, 3600000);

// Afficher les données-meteo de la ville avec maj
refreshAndDisplayWeather(cityName);
