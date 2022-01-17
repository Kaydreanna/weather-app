import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo location-weather">
      <div class="row">
        <div class="col-6" id="now">
          <div id="here">
            <h1 id="display-city">{props.data.city}</h1>
            <ul>
              <li id="date">
                <FormattedDate date={props.data.date} />
              </li>
              <li>
                Humidity: <strong id="humidity" className="temp">{props.data.humidity}%</strong>
              </li>
              <li>
                Wind: <strong id="wind" className="temp">{props.data.wind} km/h</strong>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6">
          <div class="justify-content-end" className="temperature-here">
            <div id="degrees">
              <strong className="temperature" id="temp">
              <span className="unit">
                <WeatherTemperature celsius={props.data.temperature} />
              </span>
              <div>
                <WeatherIcon code={props.data.icon} size={52} />
                </div>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
