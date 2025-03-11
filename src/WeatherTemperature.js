import React, { useState } from "react";

export default function WeatherTemperature(props) {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C 
        </span>
      </div>
    );
  } 

