import React from 'react';
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
    <div className="forecast-3hr col">
        <div className="forecast-time">
          <h5>{hours()}</h5>
          <WeatherIcons icon = {props.data.weather[0].icon} description = {props.data.weather[0].description} />
          <div className="forecast-temp">
            <strong>
            {getMaxTemp()}{" "}
            </strong>
            {getMinTemp()}
          </div>
        </div>
    </div>
  );
}