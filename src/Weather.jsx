import React, { useState, useEffect } from 'react';

function Weather({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=ddf77ca6450942c19f0132222250503&q=${cityName}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  useEffect(() => {
    if (city.trim()) {
      fetchWeather(city);
    }
  }, [city]);

  return (
    <div className="weather">
      <h2>Weather Information</h2>
      {error && (
        <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>
      )}
      {weather && (
        <div style={{ marginTop: '20px' }}>
          <p>Location: {weather.location.name}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;