import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
    let [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity)
    
    function handleSubmit(response){
        setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        city: response.data.name,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        humidity:response.data.main.humidity,
        icon: response.data.weather[0].icon,
        date: new Date(response.data.dt * 1000)
        
    })
    }
    
    
    function search(){
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let ApiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(ApiUrl).then(handleSubmit);
    }
    function handleSearch(event){
        event.preventDefault();
        search();

    }
    function handleCityChange(event){
        setCity(event.target.value)

    }
    
    if (weatherData.ready){
return(
        <div className="Weather">
            <form onSubmit={handleSearch}>
                <div className="row">
                    <div className="col-9">
                    <input type="search"
                    placeholder="Enter a city"
                    className="form control"
                    autoFocus="on"
                    />
                    </div>
                    <div className="col-3">
                        <input type="submit"
                        value="search"
                        className="btn btn-primary"
                        onChange={handleCityChange}/>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
           
        </div>
    );
    } else{
        search();
        return "Loading"
    }
    
}