import React, { Component } from "react";
import { Container} from "@mui/material";
import mepic from './mepic.png'

class About extends Component {


  render() {
    return (
      <div className="text-gray" style={{marginBottom: "25%"}}>
        <Container maxWidth="md">
          <h3
           style={{
            fontSize: "200%", 
            textAlign: "center", 
            marginTop: '5%', 
            letterSpacing: "0.2em", 
            fontFamily: `'Fira Sans Extra Condensed', sans-serif`
            }}>About VinTracker</h3>

          <div >
            <img src={mepic} alt=""
              style={{
                width: '20%',
                borderRadius: "50%",
                padding: "2%",
                float: "left"
              }}></img>

{/* silly NONFICTIONAL story about my time creating this project . Hope you enjoy!!*/}
            <p style={{color: "black", fontFamily: `'Fira Sans Extra Condensed', sans-serif`, lineHeight: '1.6'}}>
              VinTracker was developed to make accessing your car details simple! Do you have your vehicle identification number 
              but cannot remember the make or model of you car? Well thats pretty freakin' strange but here at VinTracker, 
              we never judge the obsecure and unsual circumstances of our users! This web application was built by the future
              professional developer, Holly Grudovich. It was no easy task, as she was battling post vacation blues
              in combination with a nasty head cold she picked up during her four day cruise around the Yucatan. The odds were pitted 
              against her while her home state of Texas experienced extremely unusual weather patterns that caused the landscape 
              to become completely covered in ice. Because this is the South and Texans are much better equipped to handle
              bouts of extreme heat, no one knew how to rationally cope with the uncomfortably chilly conditions. 
              However, through her determination, she was able to press on into the madness that was central Texas, 
              typing away between multiple 12 hour long 
              instances of power outages as well as coping with the warning from the local municipality that urged their
              residents to boil the contaminated
              water that streamed from their faucets. While the fruits of her labor may not be asthetically pleasing
                (or written in typescript... whoops! I will learn!),
              they are functional and she is grateful to have contributed to the growing population of car owners who 
              can access their vehicle identification numbers.  
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;