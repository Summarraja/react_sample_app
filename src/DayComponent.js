import React, { useContext } from 'react';
import MorningContex from './MorningContex';

function DayComponent(props){
    let morning = useContext(MorningContex);
    return(
        <div>
            <h2 className={morning[0]?"":"light"}>Good {morning[0]?"Morning":"Night"}</h2>
            <br/>
            <button className="button" onClick = {()=> morning[1](!morning[0])}>
                {morning[0]?"Switch To Night":"Switch To Day"}
            </button>
        </div>
        )
}
export default DayComponent