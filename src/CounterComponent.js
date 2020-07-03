import React, {useContext, useReducer} from 'react';
import MorningContex from './MorningContex';
import CounterReducer from './CounterReducer';

function CounterComponent(props){
    let morning = useContext(MorningContex);
    let [state, dispatch]= useReducer(CounterReducer,0);
    return(
        <div>
            <h2 className={morning[0]?"":"light"}>Counter =  {state}</h2>
            <br/>
            <button className="button" onClick = {()=> dispatch('INCREMENT')}>
                Increment Counter
            </button>
            <button className="button" onClick = {()=> dispatch('DECREMENT')}>
                Decrement Counter
            </button>
        </div>
    )
}
export default CounterComponent