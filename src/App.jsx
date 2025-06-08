import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator';
import Weather from './Weather';
import TodoList from './TodoList';
import TodaysTimes from './TodaysTimes';

function App() {
  const [city, setCity] = useState('London');

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="app colorful">
      <div className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1>Welcome to My Project</h1>
          <i className="fas fa-smile"></i>
          <p>Created by Shoshi Leah & the Copilot Agent</p>
        </div>
        <img
          src="/public/softer developer (3).png"
          alt="Logo"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      </div>

      <div className="city-input-section">
        <h2>Enter City</h2>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '80%',
          }}
        />
      </div>

      <div className="weather-times-section" style={{ display: 'flex', gap: '20px' }}>
        <div className="weather-section">
          <Weather city={city} />
        </div>

        <div className="times-section">
          <TodaysTimes city={city} />
        </div>
      </div>

      <div className="todo-calculator-section" style={{ display: 'flex', gap: '20px' }}>
        <div className="todo-section">
          <TodoList />
        </div>

        <div className="calculator-section">
          <Calculator />
        </div>
      </div>

    </div>
  );
}

export default App;
