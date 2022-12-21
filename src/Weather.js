import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
    let [weatherData, setWeatherData] = useState({ready:false});
    
    function handleSubmit(response){
        console.log(response.data)
        setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        humidity:response.data.main.humidity,
        
    })
    }
    const apiKey = "1df7eb56ad9548bea729248d31a2b4dd";
    let city= "Paris"; 
    let ApiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(ApiUrl).then(handleSubmit);
    
    if (weatherData.ready){
return(
        <div className="Weather">
            <div className="row">
                <div className="col-8 pt-4">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                    alt="cloudy"/>
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                     
                    
                    <ul className="list">
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    </ul>
                    
                </div>
                
                <div className="col-4">
                    <h1>Paris, France</h1>
                    <ul>
                        <li>Wednesday 3:00 a.m.</li>
                        <li className="text-capitalize">{weatherData.description}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    } else{
        return ("Loading")
    }
    
}