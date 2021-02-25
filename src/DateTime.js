import React from 'react';
import './DateTime.css';

export default function DateTime(props) {

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.dateTime.getDay()];
  let hours = ("0" + props.dateTime.getHours()).slice(-2);
  let minutes = ("0" + props.dateTime.getMinutes()).slice(-2);
  let date = props.dateTime.getDate();
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let month = months[props.dateTime.getMonth()];
  let year = props.dateTime.getFullYear();

  return (
    <div className="DateTime">
      <div className="row">
        <div className="col-12" id="current-date">
          <h5> {day} {date} {month} {year} </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12" id="last-updated-time">
          <h5> Last updated: {hours}:{minutes} </h5>
        </div>
      </div>
    </div>
  );
}