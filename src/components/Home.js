import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import CarPage from './CarPage'



function Home() {
  const [vin, setVin] = useState("");
  const [vinProp, setVinProp] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [year, setYear] = useState("");
  const [chosenYear, setChosenYear] =  useState("");


// when user types there vin number, it is saved in the state Vin
  const handleChange = (event) => {
    setVin(event.target.value);
  };

// when user types the year of vehicle, the year is saved to the state year
  const handleYearChange= (event) => {
    setYear(event.target.value);
  };

// when user clicks submit button, the vin number is set to the state vinProp 
// because this will be sent to child component
// the chosen year will be saved in state of chosen year to be passed to child component 
// I added the setClicked state to indicate to child component where the information was submitted to satisfy
// the conditional rendering in CarPage.js
  const handleSubmit = (event) => {
    event.preventDefault();
    setVinProp(vin);
    setClicked(true)
    setChosenYear(year)
  };


    return (
      // when the user clicks the submit button, the handlesubmit function
      //  is triggered to save information in new state
      <div style={{marginTop: "6%"}}><form onSubmit={handleSubmit}>
        <h1 style={{ 
          fontFamily: `'Fira Sans Extra Condensed', sans-serif`,
          fontSize: "200%", 
          textAlign: "center", 
          color: 'black', 
          letterSpacing: "0.2em" }}>
          Search By Your Vehicle's Vin Number 
        </h1>

{/* When user types information about the vin, it is saved as the value vin through the handlechange function */}
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
{/* When user types information about the year, it is saved as the value year through the handleYearChange function */}
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
