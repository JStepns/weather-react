import React from 'react';
import './Forecast.css';
import clearSky from './images/clearSky.png';
import cloudy from './images/cloudy.png';
import brokenClouds from './images/brokenClouds.png';
import thunderstorm from './images/thunderstorm.png';
import rain from './images/rain.png';

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <h5>16:00</h5>
          <img src= {clearSky} alt="clear sky" />
          <div className="forecast-temp">
            <strong>29°</strong>28°
          </div>
        </div>
        <div className="col-2">
          <h5>19:00</h5>
          <img src= {cloudy} alt="cloudy" />
          <div className="forecast-temp">
            <strong>25°</strong>24°
          </div>
        </div>
        <div className="col-2">
          <h5>22:00</h5>
          <img src= {brokenClouds} alt="broken clouds" />
          <div className="forecast-temp">
            <strong>23°</strong>22°
          </div>
        </div>
        <div className="col-2">
          <h5>01:00</h5>
          <img src= {thunderstorm} alt="stormy" />
          <div className="forecast-temp">
            <strong>21°</strong>21°
          </div>
        </div>
        <div className="col-2">
          <h5>04:00</h5>
          <img src= {rain} alt="rain" />
          <div className="forecast-temp">
            <strong>21°</strong>21°
          </div>
        </div>
        <div className="col-2">
          <h5>07:00</h5>
          <img src= {clearSky} alt="clear sky" />
          <div className="forecast-temp">
            <strong>27°</strong>25°
          </div>
        </div>
      </div>
    </div>
  );
}