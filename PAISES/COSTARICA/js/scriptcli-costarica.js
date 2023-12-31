const apiKey = "378bc93c3980714a7cddb245cd56420f";
const apiCountryURL = "https://countryflagsapi.com/png/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data
}

const showWeatherData = async(city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseFloat(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
 );
  countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  umidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}Km/h`;

 

  weatherContainer.classList.remove("hide");
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value

  showWeatherData(city);
})

cityInput.addEventListener("keyup", (e) => {

  if(e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);
  }

})

//ALTO CONTRASTE
const btnoff = document.getElementById("lampadaoff")
const btnon = document.getElementById("lampadaon")

btnoff.style.display = "none"
function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    btnon.style.display = "none"
    btnoff.style.display = "flex"
    btnoff.addEventListener("click", lightMode)
    element.className = "dark-mode";
    content.innerText = "Dark Mode is OFF";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    btnoff.style.display = "none";
    btnon.style.display = "flex"
    element.className = "light-mode";
    content.innerText = "Dark Mode is ON";
}
//FIM DO ALTO CONTRASTE