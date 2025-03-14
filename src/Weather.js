import React, { useState } from "react";
import WeathInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      condition: response.data.condition.description,
      icon: response.data.condition.icon,
      city: response.data.city,
      coordinates: response.data.coordinates,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "c3a451d0adt46fobb2b9a77755f49315";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
        <WeathInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
