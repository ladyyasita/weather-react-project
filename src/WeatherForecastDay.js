import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temp.maximum);
    return `${temp}°`;
  }
  function minTemperature() {
    let temp = Math.round(props.data.temp.minimum);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div className="forecast-temp">
        <span className="forecast-temp_max">{maxTemperature()}</span>
        <span className="forecast-temp_min">{minTemperature()}</span>
      </div>
    </div>
  );
}
