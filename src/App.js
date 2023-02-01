import React, { useState, useEffect} from "react";
import "./App.css";

function App() {
  const [vin, setVin] = useState([]);
  const [vinProp, setVinProp] = useState("");
  const [carData, setCarData] = useState(null);

  const handleChange = (event) => {
    setVin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVinProp(vin);
  };

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/${vinProp}?format=json&modelyear=2011`);
        const newData = await response.json();
        setCarData(newData);
    };
    fetchData();
    }, [vinProp]);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            VIN #: 
            <input onChange={handleChange} type="text" name="vin" placeholder="insert VIN number" value={vin} />
          </label>
        <input type="submit" value="submit" />
      </form>

    </div>
    );
}

export default App;
