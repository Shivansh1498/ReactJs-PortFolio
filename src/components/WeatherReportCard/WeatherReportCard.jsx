import React from "react";
import "./WeatherReportCard.css";

const WeatherReportCard = ({ weatherData }) => {
  return (
    <>
      <div className="weatherReportCard__container">
        <div className="weatherReportCard__container-header">
          <img
            src={`../images/weatherCardImages/${weatherData?.weather[0]?.icon}.png`}
            alt="sunny"
          />
          <div className="weatherReportCard__container-header-content display__flex">
            <div className="climate-info">{weatherData?.weather[0]?.main}</div>
            <div className="temp-info">
              {weatherData?.main?.temp}
              <sup>°</sup>
            </div>
            <div className="place-name">
              {weatherData?.name}, {weatherData?.sys?.country}
            </div>
          </div>
        </div>
        <div className="weatherReportCard__container-footer">
          <div className="wind-info">
            <p className="display__flex weatherReportCard__container-footer-details">
              <img src="../images/weatherCardImages/windIcon.svg" alt="" />
              Wind Speed
            </p>
            <p>{weatherData?.wind?.speed} mph</p>
          </div>
          <div className="humidity-info">
            <p className="display__flex weatherReportCard__container-footer-details">
              <img src="../images/weatherCardImages/humidityIcon.svg" alt="" />
              Humidity
            </p>
            <p>{weatherData?.main?.humidity}%</p>
          </div>
          <div className="pressure-info">
            <p className="display__flex weatherReportCard__container-footer-details">
              <img src="../images/weatherCardImages/rainfallIcon.svg" alt="" />
              Pressure
            </p>
            <p>{weatherData?.main?.pressure} in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherReportCard;
