import React, { useState } from 'react';
import axios from 'axios';
import './SearchForm.css';

export default function SearchForm() {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState("");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
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
    let cityInput = document.querySelector("#search-box").value;
    let cityHeading = document.querySelector("#dropdownMenu2").value;
    event.preventDefault();
    if (cityInput.value){
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
            Ipswich, AU
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
  return (
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
} else {
  search();
  return form;
}
}