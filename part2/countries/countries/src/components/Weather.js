import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div>
      <p>Temperature: {weatherData.main.temp} </p>
      <p>Weather: {weatherData.weather[0].description} </p>
    </div>
  );
};

export default Weather;
