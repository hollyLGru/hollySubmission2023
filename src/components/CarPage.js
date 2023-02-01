// import React, { useState, useEffect } from "react";

// function CarPage(props) {
//     const [carData, setCarData] = useState(null);
//     const [vin] = useState(props);

//     useEffect(() => {
//     const fetchData = async () => {
//         const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/3fadp4ej9bm198265?format=json&modelyear=2011`);
//         const newData = await response.json();
//         setCarData(newData)
//     };
//     fetchData();
//     }, []);

//     console.log(carData)
// // calls api, returns values based on submitted VIN #. 
// // Data about specific car is saved in variable 'carData'

//     return (
//         <h1>CARPAGE</h1>
//     );
// }

// export default CarPage;