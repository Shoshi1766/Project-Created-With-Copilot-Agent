import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [calcInput, setCalcInput] = useState('');

  const handleCalcInput = (value) => {
    setCalcInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setCalcInput(eval(calcInput).toString());
    } catch {
      setCalcInput('Error');
    }
  };

  const clearCalcInput = () => {
    setCalcInput('');
  };

  const handleKeyDown = (event) => {
    const validKeys = '0123456789+-*/.';
    if (validKeys.includes(event.key)) {
      setCalcInput((prev) => prev + event.key);
    } else if (event.key === 'Enter') {
      calculateResult();
    } else if (event.key === 'Backspace') {
      setCalcInput((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="calculator" onKeyDown={handleKeyDown} tabIndex="0">
      <h1>Calculator</h1>
      <div className="calculator-display">{calcInput}</div>
      <div className="calculator-buttons">
        {["7", "8", "9", "+"].map((btn) => (
          <button key={btn} onClick={() => handleCalcInput(btn)}>{btn}</button>
        ))}
        {["4", "5", "6", "-"].map((btn) => (
          <button key={btn} onClick={() => handleCalcInput(btn)}>{btn}</button>
        ))}
        {["1", "2", "3", "*"].map((btn) => (
          <button key={btn} onClick={() => handleCalcInput(btn)}>{btn}</button>
        ))}
        {["C", "0", "=", "/"].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculateResult() : btn === "C" ? clearCalcInput() : handleCalcInput(btn))}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;