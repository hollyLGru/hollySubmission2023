import React, { Component } from "react";
import { Container} from "@mui/material";


class About extends Component {


  render() {
    return (
      <div className="text-gray">
        <Container maxWidth="md">
          <h1 style={{fontSize: "200%", textAlign: "center", color: 'black', marginTop: '5%', letterSpacing: "0.2em", textShadow: "2px 2px 3px grey"  }}>About VinTracker</h1>
          <div >
            <img src="https://media.licdn.com/dms/image/D5603AQGd6pu_m-Fm-A/profile-displayphoto-shrink_800_800/0/1666811894139?e=1680739200&v=beta&t=G5KBSSaHIqS1rXu8f33Dn-7eTdp9pdSBbwx--FyytwA" 
              id="profile-pic" 
              alt="Head shot of Me"
              style={{
                width: '20%',
                borderRadius: "50%",
                padding: "2%",
                float: "left"
              }}></img>
          <p style={{color: "black"}}>
            VinTracker was developed to make accessing users car details simple! Do you have your vin number 
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
             can access their vin numbers.  
          </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;