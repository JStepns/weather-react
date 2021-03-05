import React, { useState } from 'react';
import axios from 'axios';
import './SearchForm.css';
import DateTime from './DateTime';
import Clock from './Clock';
import Temperature from './Temperature';
import WeatherElements from './WeatherElements';
import Forecast from './Forecast';
import WeatherIcons from './WeatherIcons';

export default function SearchForm(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  const apiKey = "56d850ac737202634200204105b3c8de";

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      dateTime: new Date(response.data.dt*1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
    setCity(response.data.name);
  }

  function search(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
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

  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    

    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
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
        <button id="current-location-button" onClick={getCurrentLocation}>
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
    );

  if (weatherData.ready) {
  return (
      <div>
        {form}
        <div>
          <Clock />
        </div>
        <div>
          <DateTime dateTime={weatherData.dateTime} />
        </div>
        <div>
          <Temperature data = {weatherData} />
        </div>
        <div>
          <WeatherElements data = {weatherData} />
        </div>
        <div>
          <Forecast city = {weatherData.city} />
        </div>
        <div>
          <WeatherIcons data = {weatherData} /> 
        </div>
      </div>
    );
} else {
  search();
  return (
    <div>
        {form}
        <div>
          <Clock />
        </div>
    </div>
  );
}
}