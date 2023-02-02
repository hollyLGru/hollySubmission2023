import React, { useState, useEffect} from "react";
import { TextField, Button, Container } from "@mui/material";


function Home() {
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
          <h1 style={{ textAlign: "center", color: 'grey', marginTop: '2%' }}>
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
              <Button
                type="submit"
                className="login-button"
                variant="contained"
                color="primary"
                style={{
                  borderRadius: 35,
                  backgroundColor: "#2abfc7",
                  marginTop: "1%",
                  padding: "12px 30px",
                  fontSize: "18px",
              }}
              >
                Submit
              </Button>
            </div>
        </form>

        <ol>

        </ol>
    </div>
    );
}

export default Home;
