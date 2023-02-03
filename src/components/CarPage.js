import React, { useState, useEffect } from "react";
import CarImages from './CarImages'

function CarPage({vinProp, handleSubmit, clicked}) {
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
                {clicked === true ?
                <div style={{                
                marginTop: "5%",
                marginBottom: "8%"}}>

                <h3 style={{
                marginLeft: "10%",
                 padding: "1%",
                 letterSpacing: "0.1em"
                 }}>Results for Vin Number: {vinProp}</h3>
                <div style={{
                    display: 'flex', 
                    justifyContent: "center", 
                    width: "80%", 
                    marginLeft: "2%", 
                    marginRight: "5%"}}>

                    <CarImages/>
                    <ul style={{margin: "2%"}}> 
                        <li>Make : {carData[7].Value} </li>
                        <li>Model : {carData[9].Value}</li>
                        <li>Body STYLE: {carData[23].Value} </li>
                        <li>Doors : {carData[24].Value}</li>
                        <li>Series : {carData[12].Value}</li>
                    </ul> 

                    <ul style={{margin: "2%"}}>
                        <li>Engine Number of Cylinders: {carData[70].Value}</li>
                        <li>Fuel Type : {carData[77].Value}</li>
                        <li>Manufactor City: {carData[11].Value}</li>
                        <li>Manufactor Country : {carData[15].Value}</li>
                    </ul></div>
                </div>
            : "" }
        </div>

    );
}

export default CarPage;