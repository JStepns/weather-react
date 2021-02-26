import React from 'react';
import './Temperature.css';
import clearSky from './images/clearSky.png';

export default function Temperature(props) {
  return(
  <div className="Temperature">
      <div className="row" id="current-temp">
        <div className="col-6" id="current-temp-value">
          {props.data.temperature}
        </div>
        <div className="col-6" id="temp-units">
          <a href="/" id="celsius">
            ℃
          </a>
          <a href="/" id="fahrenheit">
            ℉
          </a>
        </div>
      </div>
      <div className="row" id="current-temp-icon">
        <div className="col-12">
          <img src = {clearSky} alt="clear sky" />
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