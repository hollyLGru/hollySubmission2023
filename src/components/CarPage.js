import React, { useState, useEffect } from "react";
import CarImages from './CarImages'

function CarPage({vinProp, handleSubmit, clicked, chosenYear}) {
    const [carData, setCarData] = useState([]);

    // calls api, returns values based on submitted VIN #. 
    // Data about specific car is saved in variable 'carData'
    useEffect((carData, chosenYear) => {
        const fetchData = async () => {
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vinProp}?format=json&modelyear=${chosenYear}`);
            const newData = await response.json();
            setCarData(newData.Results);
            console.log(carData)
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
                display: 'flex',
                justifyContent: "center",
                 letterSpacing: "0.1em"

                 }}>Results for Vin Number : <i><u>{vinProp}</u></i></h3>
                <CarImages carData={carData} year={chosenYear}/>
                <div style={{
                    display: 'flex', 
                    justifyContent: "center"}}>

                    <ul style={{margin: "2%", fontFamily: `'Fira Sans Extra Condensed', sans-serif`}}> 
                        <li><b>Make :</b> {carData[7].Value} </li>
                        <li><b>Model : </b>{carData[9].Value}</li>
                        <li><b>Body style :</b> {carData[23].Value} </li>
                        <li><b>Doors :</b> {carData[24].Value}</li>
                        <li><b>Vehicle Tyle :</b> {carData[14].Value}</li>
                    </ul> 

                    <ul style={{margin: "2%", fontFamily: `'Fira Sans Extra Condensed', sans-serif`}}>
                        <li><b>Engine Number of Cylinders: </b>{carData[70].Value}</li>
                        <li><b>Fuel Type : </b>{carData[77].Value}</li>
                        <li><b>Manufactor City : </b>{carData[11].Value}</li>
                        <li><b>Manufactor Country : </b>{carData[15].Value}</li>
                    </ul></div>
                </div>
                
            : "" }
        </div>

    );
}

export default CarPage;