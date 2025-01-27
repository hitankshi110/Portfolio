import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import FlightList from "../components/FlightList";
import HotelList from "../components/HotelList";

const BookingPage=()=>{
    const [results, setResults] = useState(null);
    const [type, setType] = useState('Flight');
    const handleSearch=()=>{
        setType(FormData.serviceType);

        if(FormData.serviceType === 'Flight'){
            setResults([
                {id:1, name: 'Flight X', origin:'NYC', destination : FormData.destination,price: 2500},
                {id:2, name: 'Flight Y', origin:'ABD', destination: FormData.destination, price:3000}
            ]);
        }
    };
    return(
        <div className="booking-page">
            <BookingForm onSearch={handleSearch} />
            {type === 'Flight' && <FlightList flights={results} /> }
            {type === 'Hotel' && <HotelList hotels={results}/> }
        </div>
    )
        
};

export default BookingPage;