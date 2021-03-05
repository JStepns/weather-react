import React, { useState } from 'react';
import './TemperatureUnits.css';

export default function TemperatureUnits(props){
    const [unit, setUnit] = useState("celsius");

    function displayFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function displayCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function convertCelsiusToFahrenheit(){
        return Math.round(props.celsius * 9/5 +32);
    }

    if (unit === "celsius"){
        return (
        <div className="row" id="current-temp">
            <div className="col-6" id="current-temp-value">
                {props.celsius}
            </div>
            <div className="col-6" id="unit">
                <span className = "celsius">
                    ℃
                </span>
                <a href="/" className = "fahrenheit" onClick={displayFahrenheit}>
                    ℉
                </a>
            </div>
        </div>
        );
    } else {
        return (
            <div className="row" id="current-temp">
                <div className="col-6" id="current-temp-value">
                    {convertCelsiusToFahrenheit()}
                </div>
                <div className="col-6" id="unit">
                    <a href="/" className = "celsius" onClick={displayCelsius}>
                        ℃
                    </a>
                    <span className = "fahrenheit">
                        ℉
                    </span>
                </div>
            </div>
        );
    }

}