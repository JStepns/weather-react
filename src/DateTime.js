import './DateTime.css';

export default function DateTime() {
  return (
    <div className="DateTime">
      <div className="row">
        <div className="col-12" id="current-time">
          <h5> 13:49 </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12" id="current-date">
          <h5> Fri 15 Jan 2021 </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-12" id="last-updated-time">
          <h5> Last updated: 13:46 </h5>
        </div>
      </div>
    </div>
  );
}