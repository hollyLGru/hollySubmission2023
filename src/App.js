import React, { useState, useEffect} from "react";
import "./App.css";
// import CarPage from './components/CarPage'

function App() {
  const [vin, setVin] = useState([]);
  const [carData, setCarData] = useState(null);

  const handleChange = (event) => {
    setVin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(vin);
  };
  
    // useEffect function calls api, returns values based on submitted VIN #. 
    // Data about specific car is saved in variable 'carData'
    useEffect(() => {
      console.log(vin)
    const fetchData = async () => {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vin}?format=json&modelyear=2011`);
        const newData = await response.json();
        setCarData(newData)
    };
    fetchData();
    console.log(carData)
    }, [vin]);


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            VIN #: 
            <input onChange={handleChange} type="text" name="vin" placeholder="insert VIN number" value={vin} />
          </label>
        <input type="submit" value="vin" />
      </form>
    </div>
    );
}

export default App;