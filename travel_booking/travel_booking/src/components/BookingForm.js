import React, { useState } from "react";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        destination:'',
        travelDate:'',
        serviceType:'Flight' //default to flight
    });
    const handleChange=(e)=>{
        const {name,value} = e.target.value;
        setFormData({...formData, [name]:value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(onSearch){
            onSearch(formData); //pass form data to parent component
        }
    }
    return(
        <form className="booking-form" onSubmit={handleSubmit}>
            <div>
                <label>Destination:</label>
                <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="Enter destination" required/>
            </div>
            <div>
                <label>Travel Date:</label>
                <input type="date" name="travel_date" value={formData.travelDate} onChange={handleChange} required />
            </div>
            <div>
                <label>Service Type:</label>
                <select name="service_type" value={formData.serviceType} onChange={handleChange}>
                    <option value="Flight">Flight</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Car Rental">Car Rental</option>
                </select>
            </div>
            <button type="sublit">Search</button>
        </form>
    )
};

export default BookingForm;