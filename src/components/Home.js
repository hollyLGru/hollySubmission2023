import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import CarPage from './CarPage'
import YearPicker from "react-year-picker";


function Home() {
  const [vin, setVin] = useState("");
  const [vinProp, setVinProp] = useState(null);
  const [clicked, setClicked] = useState(false);
  // const [date, setDate] = useState("")



  const handleChange = (event) => {
    setVin(event.target.value);
    // setDate(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVinProp(vin);
    setClicked(true)
  };

  

    return (
      <div><form onSubmit={handleSubmit}>
        <h1 style={{ 
          fontSize: "200%", 
          textAlign: "center", 
          color: 'black', 
          marginTop: '2%', 
          letterSpacing: "0.2em", 
          textShadow: "2px 2px 3px grey" }}>
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
{/* 
            <TextField
              required
              onChange={handleChange}
              value={date}
              name="date"
              label="insert model date"
              type="text"
              style={{margin: '1%', width: "30%"}}
            /> */}



            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              style={{
                borderRadius: 35,
                backgroundColor: "#a3741d",
                marginTop: "1%",
                padding: "12px 30px",
                fontSize: "18px",
            }}
            >
              Submit
            </Button>
          </div>
      </form>
        <CarPage vinProp={vinProp} handleSubmit={handleSubmit} clicked={clicked}/>

    </div>
    );
}

export default Home;
