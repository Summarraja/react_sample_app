import React from 'react';
import { useState } from 'react';
import "./App.css";
import CounterComponent from './CounterComponent';
import DayComponent from './DayComponent';
import MorningContex from './MorningContex';

function App() {

  let morning = useState(true);
  document.getElementById("body").className=(morning[0] ? "morning" : "night");

  return (
    
    <MorningContex.Provider value={morning}>
      <div>
        <DayComponent />
        <hr />
        <CounterComponent />
        <hr />
        <h5 className={morning[0] ? "" : "light"}>Created By Summar Raja</h5>
      </div>
    </MorningContex.Provider>
  )
}
export default App;