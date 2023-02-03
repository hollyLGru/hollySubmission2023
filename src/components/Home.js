import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import CarPage from './CarPage'



function Home() {
  const [vin, setVin] = useState("");
  const [vinProp, setVinProp] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [year, setYear] = useState("");
  const [chosenYear, setChosenYear] =  useState("");



  const handleChange = (event) => {
    setVin(event.target.value);
  };

  const handleYearChange= (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVinProp(vin);
    setClicked(true)
    setChosenYear(year)
  };


    return (
      <div style={{marginTop: "6%"}}><form onSubmit={handleSubmit}>
        <h1 style={{ 
          fontFamily: `'Fira Sans Extra Condensed', sans-serif`,
          fontSize: "200%", 
          textAlign: "center", 
          color: 'black', 
          letterSpacing: "0.2em" }}>
          Search By Your Vehicle's Vin Number 
        </h1>

          <div style={{textAlign: "center"}}>
            <TextField
              required
              onChange={handleChange}
              value={vin}
              name="vin"
              label="insert VIN number"
              type="text"
              style={{margin: '1%', width: "30%"}}
            />

            <TextField
              required
              onChange={handleYearChange}
              value={year}
              name="year"
              label="Make Year"
              type="text"
              style={{margin: '1%', width: "10%"}}
            />

            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              style={{
                borderRadius: 35,
                backgroundColor: "red",
                marginTop: "1%",
                padding: "12px 30px",
                fontSize: "18px",
            }}
            >
              Submit
            </Button>
          </div>
      </form>
        <CarPage vinProp={vinProp} handleSubmit={handleSubmit} clicked={clicked} chosenYear={chosenYear}/>


    </div>
    );
}

export default Home;
