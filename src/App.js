import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import WeatherElements from './WeatherElements';
import Forecast from './Forecast';

export default function App() {
    return (
    <div className="App">
      <div className = "Container">
      <SearchForm defaultCity = "Ipswich, AU" />
      <WeatherElements />
      <Forecast />
      </div>
      <footer>This project was coded by Jacqueline Stephens and is open-sourced on <a
        href="https://github.com/JStepns/weather-react" target="_blank" rel="noreferrer">GitHub</a> and hosted on Netlify.
    </footer>
    </div>
  );
}

