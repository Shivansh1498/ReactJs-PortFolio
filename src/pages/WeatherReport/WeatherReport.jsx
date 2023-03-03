import React, { useState } from "react";
import "./WeatherReport.css";
import axios from "axios";

import { Link } from "react-router-dom";

import { SwitchThemeButton, WeatherReportCard } from "../../components";

const WeatherReport = () => {
  const [cityName, setCityName] = useState("");
  const [weatherReport, setWeatherReport] = useState();
  const [isError, setIsError] = useState();

  /**
   * Function to Fetch the weather report
   *
   * @moduleof WeatherReport
   */
  const fetchApi = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b6299183796d32add6f4835cb041a001&units=metric`
      )
      .then((res) => {
        const weatherData = res.data;
        setIsError(false);
        setWeatherReport(weatherData);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  };

  const handleCityName = () => {
    fetchApi();
  };
  return (
    <>
      <div className="section__padding portfolio__weatherReport">
        <div className="portfolio__weatherReport-header display__flex">
          <Link to="/">
            <button className="weatherReport-button" type="button">
              back
            </button>
          </Link>
          <SwitchThemeButton />
        </div>
        <div className="portfolio__weatherReport-heading">
          <h1>Daily Weather Report</h1>
        </div>
        <div className="portfolio__weatherReport-searchBar-section">
          <input
            type="text"
            name="cityName"
            id="cityName"
            placeholder="Enter City Name..."
            className="portfolio__weatherReport-searchBar"
            autoFocus
            autoComplete="off"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                handleCityName();
              }
            }}
          />
          <button
            className="weatherReport-button"
            type="button"
            onClick={handleCityName}
          >
            search
          </button>
        </div>
        {isError ? (
          <p className="no-data-message">Invalid Location</p>
        ) : (
          <div className="portfolio__weatherReport-card">
            {weatherReport ? (
              <WeatherReportCard
                weatherData={weatherReport}
                setCityName={setCityName}
              />
            ) : (
              <p className="no-data-message">
                Search for weather data by a entering city, state or country
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherReport;
