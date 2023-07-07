import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: "Friday 11:00",
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className=" btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clear-fix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}{" "}
                </span>

                <span className="unit">°C</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity:{Math.round(weatherData.humidity)} %</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              <li>Feels Like: {Math.round(weatherData.feels_like)}°C</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "180114c4d783b1e1b6d3340b5a739957";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
