/*--Cher client, mettez le nom de votre ville à la place de Bordeaux--*/
const cityName = "Bordeaux";

/*--Test
// données-meteo test
const cities = [
  { name: "Bordeaux", temperature: "1°C", humidity: "40%" },
  { name: "Bruxelles", temperature: "3°C", humidity: "50%" },
  { name: "Londres", temperature: "5°C", humidity: "45%" },
  { name: "New york", temperature: "10°C", humidity: "55%" },
  { name: "Tokyo", temperature: "15°C", humidity: "60%" },
  { name: "Paris", temperature: "-5°C", humidity: "30%" },
];
*/

// Déclarer la clé API dans une variable
const apiMeteo = "9c8411d37cbf0d4924cebede9bc51786";

// Récupérer les données-meteo de la ville
function getWeather(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiMeteo}&units=metric`;
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cityData = {
        name: data.name,
        temperature: `${data.main.temp}°C`,
        humidity: `${data.main.humidity}%`,
      };
      return cityData;
    });
}
