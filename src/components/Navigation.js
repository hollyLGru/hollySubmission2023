import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import cookie from "cookie";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" style={{backgroundColor: "#486e55", padding: "1%"}}>
      <Toolbar style={{fontSize: '120%'}}>
        <DirectionsCarIcon style={{ fontSize: '200%', marginRight: "1%", color: "brown"}}/>
        <Typography variant="h4" style={{ textShadow: "2px 2px 3px black", flexGrow: "8", fontWeight: "bold", letterSpacing: "0.4em", color: "gold" }}>
          VinTracker. 
        </Typography>
        <ul className="nav-list" style={{float: 'right', letterSpacing: "0.1em"}}>
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about">About</Link>
          </li>
          <li
            className="nav-list-item"
            onClick={() => {document.cookie = cookie.serialize("loggedIn", null, {maxAge: 0,});
            navigate("/login")}}>
                Logout
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
