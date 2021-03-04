import React from 'react';
import './WeatherIcons.css'

export default function WeatherIcons(props) {
  const url =  `http://openweathermap.org/img/wn/`;
  return (
    <div className = "WeatherIcons">
      <img 
      src = {`${url}${props.icon}.png`}
      alt = {props.description}
      />
      </div>
  );
}