import React, { useState, useEffect } from "react";

function CarPage(props) {
    const [carData, setCarData] = useState(null);
    const [vinProp] = useState(props);
    // calls api, returns values based on submitted VIN #. 
    // Data about specific car is saved in variable 'carData'
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vinProp}?format=json&modelyear=2011`);
            const newData = await response.json();
            setCarData(newData);
            console.log(vinProp)
        };
        fetchData();
        }, [vinProp]);

    return (
        <div>
            {/* Use a public API to complete this search. It's necessary to show the YEAR, MAKE, MODEL,
 and BODY STYLE (a.k.a. BODY CLASS) of the vehicle and six other vehicle features of your choosing.
Along with the results of the search, display three images or videos of the vehicle using a public API. */}
            <ol> 
                <li>YEAR: </li>
                <li>MAKE: </li>
                <li>MODEL: </li>
                <li>BODY STYLE: </li>
            </ol>
        </div>
    );
}

export default CarPage;