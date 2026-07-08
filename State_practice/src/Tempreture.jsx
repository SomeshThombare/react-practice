import React, { useState } from 'react';

// Child Component 1: Celsius Input
function CelsiusInput({ temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input 
        value={temperature} 
        onChange={(e) => onTemperatureChange(e.target.value)} 
        type="number"
      />
    </fieldset>
  );
}

// Child Component 2: Fahrenheit Input
function FahrenheitInput({ temperature, onTemperatureChange }) {
  // Convert Celsius to Fahrenheit for display
  const fahrenheit = temperature ? (temperature * 9/5) + 32 : '';
  
  return (
    <fieldset>
      <legend>Enter temperature in Fahrenheit:</legend>
      <input 
        value={fahrenheit} 
        onChange={(e) => {
          // Convert Fahrenheit back to Celsius to update shared state
          const celsius = (e.target.value - 32) * 5/9;
          onTemperatureChange(celsius);
        }} 
        type="number"
      />
    </fieldset>
  );
}

// Parent Component: Holds the shared state
function Calculator() {
  // State is lifted here to the common parent
  const [temperature, setTemperature] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Temperature Converter</h2>
      
      {/* Passing state and setter function down as props */}
      <CelsiusInput 
        temperature={temperature} 
        onTemperatureChange={setTemperature} 
      />
      
      <FahrenheitInput 
        temperature={temperature} 
        onTemperatureChange={setTemperature} 
      />

      <p style={{ marginTop: '20px' }}>
        {temperature && `The water is ${parseFloat(temperature) >= 100 ? 'boiling' : 'not boiling'} at this temperature.`}
      </p>
    </div>
  );
}

export default Calculator;   