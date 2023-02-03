import React from "react"


function CarImages({carData, chosenYear}) {

    let url = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${chosenYear}`
    let urlTwo = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${chosenYear}&angle=05`
    let urlThree = `https://cdn.imagin.studio/getImage?customer=uszollege&make=${carData[7].Value}&modelFamily=${carData[9].Value}&modelYear=${chosenYear}&angle=13`
    return (
        <div style={{display: "flex", justifyContent: 'center'}}>
            <img src={url} alt="" style={{width: "25%"}} />
            <img src={urlTwo} alt="" style={{width: "25%"}} />
            <img src={urlThree} alt="" style={{width: "25%"}} />
        </div>
    );
}

export default CarImages;