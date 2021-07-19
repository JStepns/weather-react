import React from 'react';
import "./FormatForecast.css";
import WeatherIcons from './WeatherIcons';

export default function FormatForecast(props) {

  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function getMaxTemp() {
    let forecastMaxTemp = Math.round(props.data.main.temp_max);

    return `${forecastMaxTemp}°C`;
  }

  function getMinTemp() {
    let forecastMinTemp = Math.round(props.data.main.temp_min);

    return `${forecastMinTemp}°C`;
  }

  return (
    <div className="forecast-3hr">
      <div className="forecast-time">
        {hours()}
      </div>
      <WeatherIcons icon = {props.data.weather[0].icon} description = {props.data.weather[0].description} />
      <div className="forecast-temp">
        {getMinTemp()}{" "}
        <strong>
          {getMaxTemp()}
        </strong>
      </div>
    </div>
  );
}