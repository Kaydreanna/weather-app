import React from "react";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temp: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="weather">
      <div className="body">
        <div id="weather-app-wrapper">
          <div id="search-here">
            <form>
              <input type="text" id="search-bar" placeholder="Search..." />
              <input type="submit" id="search-button" value="Search" />
              <button id="location">Current Location</button>
            </form>
            <br />
          </div>
          <div className="location-weather">
            <div class="row">
              <div class="col-6" id="now">
                <div id="here">
                  <h1 id="display-city">{weatherData.city}</h1>
                  <ul>
                    <li id="date">{weatherData.date}</li>
                    <li>
                      Humidity:{" "}
                      <strong id="humidity">{weatherData.humidity}%</strong>
                    </li>
                    <li>
                      Wind: <strong id="wind">{weatherData.wind} km/h</strong>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-6">
                <div class="justify-content-end" className="temperature-here">
                  <div id="degrees">
                    <strong className="temperature" id="temp"></strong>
                    <span className="unit">
                      <a href="#" id="celsius" className="active">
                        °C
                      </a>
                      |
                      <a href="#" id="fahrenheit">
                        °F
                      </a>
                    </span>
                    <div>
                      <img
                        src={weatherData.imgUrl}
                        alt={weatherData.description}
                        id="icon"
                      />
                    </div>
                    <div id="description"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
