import React from "react";
import FormatteDate from"./FormatteDate";

export default function WeatherInfo(props){
    return(
     <div className="WeatherInfo">
     <div className="row">
                <div className="col-8 pt-4">
                   <img src="https://openweathermap.org/img/wn/${props.data.icon}@2x.png"
                    alt="cloudy"/>
                    <span className="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="unit">°C</span>
                     
                    
                    <ul className="list">
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                    
                </div>
                
                <div className="col-4">
                    <h1>{props.data.city}</h1>
                    <ul>
                        <li> 
                            <FormatteDate date={props.data.date}/>
                          </li>
                        <li className="text-capitalize">{props.data.description}</li>
                    </ul>
                </div>
            </div>
            </div>);
}