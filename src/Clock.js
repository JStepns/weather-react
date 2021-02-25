//import React from 'react';
import React, { useState } from 'react';

export default function Clock (){
    let [currentHour, getCurrentHour] = useState("");
    let [currentMinutes, getCurrentMinutes] = useState("");
    //const currentTime = new Date(),
    //currentHour = currentTime.getHours(),
    //currentMinutes = currentTime.getMinutes();

    const currentTime = new Date ();
    getCurrentHour("0" + currentTime.getHours()).slice(-2);
    getCurrentMinutes ("0" + currentTime.getMinutes()).slice(-2);
    setInterval (getCurrentHour, 60000);
    setInterval (getCurrentMinutes, 60000);

    return (
      <div className="Clock">
      <div className="row">
        <div className="col-12" id="current-time">
          <h5> {currentHour}: {currentMinutes} </h5>
        </div>
      </div>
      </div>
    );
}