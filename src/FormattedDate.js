import React from "react";

export default function FormattedDate(props) {
  if (!props.date || !(props.date instanceof Date)) {
    return <div>Invalid date</div>;
  }

  console.log(props.date);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let mins = props.date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }

  return (
    <div>
      {day} {hours}:{mins}
    </div>
  );
}
