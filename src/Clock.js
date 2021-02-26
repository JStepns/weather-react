import React, { useState, useEffect } from 'react';
import './Clock.css'

export default function Clock (){
  const [currentHour, getCurrentHour] = useState("0" + new Date().getHours());
  const [currentMinutes, getCurrentMinutes] = useState("0" + new Date().getMinutes());
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      getCurrentMinutes("0" + new Date().getMinutes())
    },60000); 

    return () => clearInterval(interval)
},[currentMinutes])

 useEffect(()=>{
    const interval = setInterval(()=>{
      getCurrentHour("0" + new Date().getHours())
    },60000); 

    return () => clearInterval(interval)
},[currentHour])

  return (
    <div className="Clock">
      <div className="row">
        <div className="col-12" id="current-time">
          <h5>
            <strong>
            Time: {" "}
            {currentHour.slice(-2)}:{currentMinutes.slice(-2)}
            </strong>
          </h5>
        </div>
      </div>
    </div>
  );
}