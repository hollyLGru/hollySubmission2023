import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "cookie";
import carLogo from './carLogo.gif'

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation"> 
      <div style={{display: "flex"}}>
        <img 
          style={{ width: "50%"}}
          src={carLogo} alt=""/> 
          <h1 className="font-link" style={{
            float: "right", 
            paddingTop: "1%", 
            paddingLeft: "2%", 
            letterSpacing: "0.5em", 
            fontSize: "250%"}}>VinTracker</h1>
        </div>
      <div style={{paddingBottom:"2%", display: "flex", justifyContent: "right", paddingRight: "5%"}}>
      <ul className="font-link2" style={{display: "flex", paddingTop: "-5%"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li  className="logOutButton"
          onClick={() => {document.cookie = cookie.serialize("loggedIn", null, {maxAge: 0,}); navigate("/login")}}>
            Logout
          </li>
        </ul>
      </div>

    </div>

  );
};

export default Navigation;
