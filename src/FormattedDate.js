import React from "react";

export default function FormattedDate(props) {
  let days = ["Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let mins = props.date.getMinutes();
  if (mins < 10 ){
    mins = `0${mins}`;
  }
  return (
    <div>
      {day}
      {hours}:{mins}
    </div>
  );
}
