import React from 'react';
import './Temperature.css';
import TemperatureUnits from './TemperatureUnits';

export default function Temperature(props) {
  const url =  `http://openweathermap.org/img/wn/`;
  return(
  <div className="Temperature">
      <TemperatureUnits celsius={props.data.temperature} />
      <div className="row" id="current-temp-icon">
        <div className="col-12">
          <img src = {`${url}${props.data.icon}.png`} alt={props.data.description} />
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