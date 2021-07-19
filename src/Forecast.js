import React, { useState } from 'react';
import axios from 'axios';
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
        <div className = "col-sm-4 col-md-4 col-lg-2"><FormatForecast data={forecast.list[0]} /></div>
        <div className = "col-sm-4 col-md-4 col-lg-2"><FormatForecast data={forecast.list[1]} /></div>
        <div className = "col-sm-4 col-md-4 col-lg-2"><FormatForecast data={forecast.list[2]} /></div>
        <div className = "col-sm-4 col-md-4 col-lg-2 d-none d-sm-block"><FormatForecast data={forecast.list[3]} /></div>
        <div className = "col-sm-4 col-md-4 col-lg-2 d-none d-sm-block"><FormatForecast data={forecast.list[4]} /></div>
        <div className = "col-sm-4 col-md-4 col-lg-2 d-none d-sm-block"><FormatForecast data={forecast.list[5]} /></div> 
    </div>
    );
  } else {
    let apiKey = "56d850ac737202634200204105b3c8de";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}