import React from 'react';

function CounterComponent(props){
    return(
        <div>
            <h2 className={props.isMorning?"":"light"}>Counter =  {props.counter}</h2>
            <br/>
            <button className="button" onClick = {()=> props.setCounter(props.counter+1)}>
                Increment Counter
            </button>
            <button className="button" onClick = {()=> props.setCounter(props.counter-1)}>
                Decrement Counter
            </button>
        </div>
    )
}
export default CounterComponent