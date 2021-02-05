import './Temperature.css';

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row" id="current-temp">
        <div className="col-6" id="current-temp-value">
          30
        </div>
        <div className="col-6" id="temp-units">
          <a href="#" id="celsius">
            ℃
          </a>
          <a href="#" id="fahrenheit">
            ℉
          </a>
        </div>
      </div>
      <div className="row" id="current-temp-icon">
        <div className="col-12">
          <img src="../images/clear-sky.png" alt="clear sky" />
        </div>
      </div>
      <div className="row" id="min-max">
        <div className="col-6" id="min-temp">
          Min: 21°
        </div>
        <div className="col-6" id="max-temp">
          Max: 32°
        </div>
      </div>
    </div>
  );
}