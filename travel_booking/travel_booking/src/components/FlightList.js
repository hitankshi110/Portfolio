import React from "react";

const FlightList=({flights})=>{
    if(!flights ||flights.lenght === 0){
        return <p>No flights found!</p>;
    }
    return(
        <ul className="flight-list">
            {flights.map((flight)=>(
                <li key={flight.id}>
                    <h3>{flight.name}</h3>
                    <p>From: {flight.origin}</p>
                    <p>To: {flight.destination}</p>
                   <p>Price: ${flight.price}</p>
                </li>
            ))}
        </ul>
    )
}

export default FlightList;