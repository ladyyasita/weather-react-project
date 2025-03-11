import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDAy(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemperature() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-day"></div>
      {forecast[0].dt}
      <WeatherIcon code={forecast[0].weather[0].icon} size={35} />
      <div className="forecast-temp">
        <span className="forecast-temp_max">{maxTemperature()}</span>
        <span className="forecast-temp_min">{minTemperature()}</span>
      </div>
    </div>
  );
}
