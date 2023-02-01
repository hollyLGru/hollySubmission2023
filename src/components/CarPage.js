import React, { useState, useEffect } from "react";

function CarPage(props) {
    const [carData, setCarData] = useState(null);
    const vin = props;

    useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vin}?format=json&modelyear=2011`);
        const newData = await response.json();
        setCarData(newData)
    };
    fetchData();
    }, []);

// calls api, returns values based on submitted VIN #. 
// Data about specific car is saved in variable 'carData'

    return (
        <h1>CARPAGE</h1>
    );
}

export default CarPage;