import React from 'react';
import './Temperature.css';
import TemperatureUnits from './TemperatureUnits';
import WeatherIcons from './WeatherIcons';

export default function Temperature(props) {
  return(
  <div className="Temperature">
      <TemperatureUnits celsius={props.data.temperature} />
      <div className="row" id="current-temp-icon">
        <div className="col-12">
          <WeatherIcons icon = {props.data.icon} description={props.data.description} />
        </div>
      </div>
      <div className="row" id="min-max">
        <div className="col-6" id="min-temp">
          Min: {props.data.minTemp}°
        </div>
        <div className="col-6" id="max-temp">
          Max: {props.data.maxTemp}°
        </div>
      </div>
    </div>
    );
}