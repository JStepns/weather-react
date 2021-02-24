import React, { useState } from 'react';
import axios from 'axios';
import './SearchForm.css';
import DateTime from './DateTime';

export default function SearchForm(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      dateTime: new Date(response.data.dt*1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
  }

  function search(){
    const apiKey = "56d850ac737202634200204105b3c8de";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    if (city){
      search();
    } else {
      alert ("Please enter a city");
    } 
  }

  function changeCity(event){
    setCity(event.target.value);
  }

  let form = (
  <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {city}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="🔍 Search your city"
                    id="search-box"
                    onChange={changeCity}
                  />
                </div>
                <div className="col-4">
                  <input type="submit" value="Search" id="search-button" />
                </div>
              </div>
            </button>
          </div>
        </div>
        <button id="current-location-button">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
    );

  if (weatherData.ready) {
  return form && ( 
    <div>
    <DateTime dateTime={weatherData.dateTime} />
    </div>
  );
} else {
  search();
  return form;
}
}