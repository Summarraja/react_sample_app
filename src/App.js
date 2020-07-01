import React from 'react';
import {useState} from 'react';
import "./App.css";
import CounterComponent from './CounterComponent.js';
import DayComponent from './DayComponent.js';
function App(){
  let [counter, setCounter] = useState(0);
  let [isMorning, morning] = useState(true);
  return(
    <div className={isMorning?"morning":"night"}>
      <DayComponent isMorning = {isMorning} morning= {morning}/>

      <hr/>
      <CounterComponent isMorning = {isMorning} counter={counter} setCounter={setCounter}/>

    </div>

  )
}
export default App;