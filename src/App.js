import React, { useState} from "react";
import "./App.css";
import CarPage from './components/CarPage'

function App() {
  const [vin, setVin] = useState([]);

  const handleChange = (event) => {
    setVin(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
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
    <CarPage myVin={vin}/> 

    </div>
    );
}

export default App;
