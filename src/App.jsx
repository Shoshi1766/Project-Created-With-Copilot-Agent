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
    <div className="app colorful" style={{ overflow: 'hidden' }}>
      <div className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div className="city-input-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
          <span style={{ marginBottom: '5px', fontSize: '1.5rem', color: '#444', fontWeight: 'bold' }}>Enter a city</span>
          <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '5px', padding: '5px', backgroundColor: '#f8f9fa' }}>
            <i className="fas fa-city" style={{ marginRight: '10px', color: '#007bff' }}></i>
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city name"
              style={{
                padding: '8px',
                border: 'none',
                outline: 'none',
                fontSize: '0.9rem',
                flex: '1',
              }}
            />
          </div>
        </div>
        <img
          src="/softer-developer-3.png"
          alt="Logo"
          style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '10px' }}
        />
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '1.5rem' }}>Welcome to My Project</h1>
          <p style={{ fontSize: '0.9rem' }}>Created by Shoshi Leah & the Copilot Agent</p>
        </div>
      </div>

      <div className="components-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', flexWrap: 'nowrap', gap: '5px', padding: '10px' }}>
        <div className="weather-section" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Weather city={city} />
        </div>

        <div className="times-section" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <TodaysTimes city={city} />
        </div>

        <div className="todo-section" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <TodoList />
        </div>

        <div className="calculator-section" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
