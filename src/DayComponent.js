import React from 'react';

function DayComponent(props){
    return(
        <div>
            <h2 className={props.isMorning?"":"light"}>Good {props.isMorning?"Morning":"Night"}</h2>
            <br/>
            <button className="button" onClick = {()=> props.morning(!props.isMorning)}>
                {props.isMorning?"Switch To Night":"Switch To Day"}
            </button>
        </div>
        )
}
export default DayComponent