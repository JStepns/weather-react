import React, { useState } from 'react';
import axios from 'axios';
import './Forecast.css';
import FormatForecast from './FormatForecast';

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name){
    return (
    <div className = "forecast row">
        <FormatForecast data={forecast.list[0]} />
        <FormatForecast data={forecast.list[1]} />
        <FormatForecast data={forecast.list[2]} />
        <FormatForecast data={forecast.list[3]} />
        <FormatForecast data={forecast.list[4]} />
        <FormatForecast data={forecast.list[5]} />
    </div>
    );
  } else {
    let apiKey = "56d850ac737202634200204105b3c8de";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}