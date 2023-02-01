import React, { useState} from "react";
import "./App.css";
import CarPage from './components/CarPage'

function App() {
  const [vin, setVin] = useState([]);
  const [vinProp, setVinProp] = useState("");

  const handleChange = (event) => {
    setVin(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setVinProp(...vin);

  };


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            VIN #: 
            <input onChange={handleChange} type="text" name="vin" placeholder="insert VIN number" value={vin} />
          </label>
        <input type="submit" value="submit" />
      </form>
    <CarPage vinProp={vinProp}/> 

    </div>
    );
}

export default App;
