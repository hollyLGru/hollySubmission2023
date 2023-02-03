import React from "react"


function CarImages({carData, chosenYear}) {

// image url is chosen based on carData submitted. Three images are returned to give a comprehensive veiw of vehicle
    let url = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${chosenYear}`
    let urlTwo = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${chosenYear}&angle=05`
    let urlThree = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${chosenYear}&angle=13`
    return (
        // I originally had the images displayed in a coursel but I believe the three images shown
        // simultaneously was more asthetically pleasing. 
        <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={url} alt="" style={{width: "25%"}} />
            <img src={urlTwo} alt="" style={{width: "25%"}} />
            <img src={urlThree} alt="" style={{width: "25%"}} />
        </div>
    );
}

export default CarImages;