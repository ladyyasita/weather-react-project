import React, { useState } from "react";
import WeathInfo from "./WeatherInfo";
import Weather from "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [weatherData, setWeatherDataTemperature] = useState({ready:false});
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setweatherData({
      ready:true,
      temperature: response.data.main.temp,
      humidity: response.data.main,
      date: new Date(response.data.dt *1000),
      description: response.data.weather[0].description,
      icon:response.description.data.weather[0],
      wind: response.data.wind.sped,
      city: response.data.name
    });
  }
  function search() {
    let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
function handleSubmit(event){
  event.preventDefault();
search(city);  
}
function handleCityChange(event){

setCity(event.target.value);

}
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autofocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeathInfo/>
       
      </div>
    );
  } else     {
    search();
    return "Loading...";
}
}
