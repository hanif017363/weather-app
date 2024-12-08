const apiKey = "31b39a09c21ac575a7e0e9944eaf8fcd";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBox = document.querySelector(".weather");

//

//
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    document.querySelector(".error").classList.remove("hidden");
    weatherBox.style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";

        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";

        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";

        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";

        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
      case "Snow":
        weatherIcon.src = "images/snow.png";

        break;

      default:
        weatherIcon.src = "images/snow.png";
        break;
    }
    weatherBox.style.display = "block";
    document.querySelector(".error").classList.add("hidden");
  }

  //   if (data.weather[0].main === "Clouds") {
  //     weatherIcon.src = "images/clouds.png";
  //   } else if (data.weather[0].main === "Clear") {
  //     weatherIcon.src = "images/clear.png";
  //   } else if (data.weather[0].main === "Snow") {
  //     weatherIcon.src = "images/snow.png";
  //   } else if (data.weather[0].main === "Rain") {
  //     weatherIcon.src = "images/rain.png";
  //   } else if (data.weather[0].main === "Drizzle") {
  //     weatherIcon.src = "images/drizzle.png";
  //   } else if (data.weather[0].main === "Mist") {
  //     weatherIcon.src = "images/mist.png";
  //   }

  //
  ///
}
searchBtn.addEventListener("click", () => {
  //   weatherBox.classList.remove("hidden");

  if (!searchBox.value) {
    return window.alert("input filed is empty");
  } else {
    checkWeather(searchBox.value);
  }
});
