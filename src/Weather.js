import React from "react";
import "./Weather.css";
export default function Weather(){
    return(
        <div className="Weather">
            <div className="row">
                <div className="col-8">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="cloudy"/>
                    <span className="temperature">12</span>
                    <span className="unit">°C</span>
                     
                    
                    <ul className="list">
                        <li>Humidity: 92%</li>
                        <li>Wind: 10 km/h</li>
                    </ul>
                    
                </div>
                <div className="col-4">
                    <h1>Paris, France</h1>
                    <ul>
                        <li>Wednesday 3:00 a.m.</li>
                        <li>Cloudy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}