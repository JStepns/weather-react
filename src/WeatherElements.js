import React from 'react';
import './WeatherElements.css';

export default function WeatherElements(props) {
  return (
    <div className="row" id="weather-elements">
      <div className="col-sm-4" id="pressure">
        <em>Pressure: {props.data.pressure}hPa</em>
      </div>
      <div className="col-sm-4" id="humidity">
        <em>Humidity: {props.data.humidity}%</em>
      </div>
      <div className="col-sm-4" id="wind">
        <em>Wind speed: {props.data.wind}m/s</em>
      </div>
    </div>
  );
}