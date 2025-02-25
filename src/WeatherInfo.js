import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeathInfo(props){
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate info={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
          <li></li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                {" "}
                <span className="temp">{Math.round(temperature)}</span>
              </div>
              <span className="unit text-capitalize">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    );
}