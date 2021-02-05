import './WeatherElements.css';

export default function WeatherElements() {
  return (
    <div className="row" id="weather-elements">
      <div className="col-4" id="pressure">
        <em>Pressure: 1009hPa</em>
      </div>
      <div className="col-4" id="humidity">
        <em>Humidity: 52%</em>
      </div>
      <div className="col-4" id="wind">
        <em>Wind speed: 1.34m/s</em>
      </div>
    </div>
  );
}