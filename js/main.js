//API key
const apiKey = `940a2aed0156618721eee569a8be9209`;

// const apikeyForCity = `efe91686e85d642675825c2b93bf493e
// `;
// const cityName = "kabul";

// fetch weather data based on the city name
async function fetchData(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    );
    if (!response.ok) {
      window.alert("Please Enter Correct City name");
      throw new Error("Unable to fetch weather Data");
    }

    const responseJason = await response.json();

    //for debugging
    console.log(responseJason);
    //   console.log(responseJason.main.temp);
    //   console.log(responseJason.name);
    //   console.log(responseJason.wind.speed);
    //   console.log(responseJason.visibility);
    //   // console.log(responseJason.humidity);
    //     console.log(responseJason.main.humidity);

    updateUi(responseJason);
  } catch (error) {
    console.log(error);
  }
}
// Select elements from the DOM
const cityElement = document.querySelector(".city");
const temperatureElement = document.querySelector(".temperature");
const windElement = document.querySelector(".wind-speed");
const humidityElement = document.querySelector(".humidity");
const visibilityElement = document.querySelector(".visibility-distance");
const decriptionTextElement = document.querySelector(".decription-text");
const dateElement = document.querySelector(".date");
const searchFormIcon = document.querySelector(".search-form-icon");

//update the UI with the fetched new data
function updateUi(responseJason) {
  cityElement.textContent = responseJason.name;
  temperatureElement.textContent = ` ${Math.round(responseJason.main.temp)}°`;
  windElement.textContent = `${responseJason.wind.speed} Km/h`;
  humidityElement.textContent = `${responseJason.main.humidity} %`;
  visibilityElement.textContent = `${responseJason.visibility / 1000} Km`;
  decriptionTextElement.textContent = responseJason.weather[0].main;
  const currentDate = new Date();
  dateElement.textContent = currentDate.toDateString();

  // Get the weather condition for icon change
  const weatherCondition = responseJason.weather[0].main;
  const iconName = getIconName(weatherCondition);
  searchFormIcon.className = "fa-sharp fa-solid search-form-icon";
  searchFormIcon.classList.add(iconName);
}

const formElement = document.querySelector(".search-form");
const cityInputElement = document.querySelector(".city-input");
//  display weather data if the city name is not empty
formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = cityInputElement.value;

  if (city !== "") {
    fetchData(city);
    cityInputElement.value = "";
  }
});
//  map weather conditions to Font Awesome icon class names
function getIconName(weatherCondition) {
  const iconMap = {
    Clear: "fa-sun",
    Clouds: "fa-cloud-sun",
    Rain: "fa-cloud-sun-rain",
    Snow: "fa-snowflake",
    Thunderstorm: "fa-cloud-bolt",
    Drizzle: "fa-cloud-showers-heavy",
    Mist: "fa-smog",
    Fog: "fa-smog",
  };

  return iconMap[weatherCondition] || "fa-question";
}
