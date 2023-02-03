import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Router from "./Router";
import Footer from "./components/Footer"


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;