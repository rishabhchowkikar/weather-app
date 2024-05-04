const city_name = document.querySelector(".inputText");
const button = document.querySelector(".button");
const api_key = "API_key";
const weatherIcon = document.querySelector(".weather-icon");

button.addEventListener("click", () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city_name.value}&appid=${api_key}`;
  weather_Data(url);
});

const weather_Data = async (url) => {
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  let value = await response.json();
  console.log(value);
  document.querySelector(".city").innerHTML = value.name;
  document.querySelector(".temp").innerHTML = `${Math.round(
    value.main.temp
  )}°C`;

  document.querySelector(".humidity").innerHTML = `${value.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${value.wind.speed} km/hr`;

  if (value.weather[0].main === "Clouds") {
    weatherIcon.src = `images/clouds.png`;
  } else if (value.weather[0].main === "Clear") {
    weatherIcon.src = `images/clear.png`;
  } else if (value.weather[0].main === "Rain") {
    weatherIcon.src = `images/rain.png`;
  } else if (value.weather[0].main === "Drizzle") {
    weatherIcon.src = `images/drizzle.png`;
  } else if (value.weather[0].main === "Mist") {
    weatherIcon.src = `images/mist.png`;
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
};
