import React, { useState, useEffect } from "react";
import CarImages from './CarImages'

function CarPage({vinProp, handleSubmit}) {
    const [carData, setCarData] = useState([]);

    // calls api, returns values based on submitted VIN #. 
    // Data about specific car is saved in variable 'carData'
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vinProp}?format=json&modelyear=2011`);
            const newData = await response.json();
            setCarData(newData.Results);
        };
        fetchData();
        }, [handleSubmit, vinProp]);


    return (
        <div>
            {/* <ol> 
                <li>MAKE: {carData[7].Value} </li>
                <li>MODEL: {carData[10].Value}</li>
                <li>BODY STYLE: {carData[109].Value} </li>
            </ol> */}
        <CarImages/>
        </div>
    );
}

export default CarPage;