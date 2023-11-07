import React, { useState } from 'react'
import Image from "../assets/left-arrow.png"

const Slider = () => {
    const [sliderCount, setsliderCount] = useState(0)
    const handlenegativeClick = (e) => {

        const slider = document.getElementById('slider-container')
        if (sliderCount === 1) {
            slider.style.right = "0vw"
            setsliderCount(0)
        }
    }
    const handlepositiveClick = (e) => {
        const slider = document.getElementById('slider-container')
        if (sliderCount === 0) {
            slider.style.right = "100vw"
            setsliderCount(1)
        }
    }
    return (
        <>
            <div id='slider-wrapper'>
                <img src={Image} alt="" id='negative1' onClick={handlenegativeClick} />
                <img src={Image} alt="" id='positive1' onClick={handlepositiveClick} />
                <div id='slider-container'>
                    <img src="https://canvas-stocks-frontend.onrender.com/assets/heroimg1-350cabb0.jpeg" className=' w-full h-screen' style={{ height: "38vw" }} alt="" srcset="" />
                    <img src="https://canvas-stocks-frontend.onrender.com/assets/heroimg2-4401e6f5.jpeg" className=" w-full" style={{ height: "38vw" }} alt="" srcset="" />
                </div>
            </div>
        </>
    )
}

export default Slider
