import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDAy from "./WeatherForecastDay";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 5) {
            return(
          <div className="col" key={index}>
            <WeatherForecastDAy data={dailyForecast} />
          </div>
        );}})}
        </div>
      </div>
    );
  } else {
    let apiKey = `0f71ee8d72f86e287ce25cc07ef39c0e`;
    let longtitude = props.coordinate.lon;
    let latitude = props.coordinate.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
