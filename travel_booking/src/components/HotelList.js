import React from "react";

const HotelList=({hotels})=>{
    if(!hotels||hotels.length===0){
        return <p>Hotels Not Found!</p>
    }
    return(
        <ul className="hotel-list">
            {hotels.map((hotel)=>(
                <li key={hotel.id}>
                    <h3>{hotel.name}</h3>
                    <p>Localtion:{hotel.location}/</p>
                    <p>Price:{hotel.price}</p>
                    <p>Rating:{hotel.rating}</p>
                </li>
            ))}
        </ul>
    )
};

export default HotelList;