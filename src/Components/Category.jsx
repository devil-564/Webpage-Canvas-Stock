import React, { useState } from 'react'
import Image from "../assets/left-arrow.png"

const Category = () => {
    const [categoryCount, setcategoryCount] = useState(0)
    const handlenegativeClick = (e) => {

        const corousal = document.getElementById('corousal-container')

        if (categoryCount === 1) {
            corousal.style.right = "0vw"
            // positive.style.right = "23vw"
            // negative.style.left = "3vw"
            setcategoryCount(0)
        }
    }
    const handlepositiveClick = (e) => {
        const corousal = document.getElementById('corousal-container')
        console.log('hello')
        if (categoryCount === 0) {
            corousal.style.right = "21vw"
            // positive.style.right = "13vw"
            // negative.style.left = "13vw"
            setcategoryCount(1)
        }
    }

    return (
        <>
            <h1 className="font-bold text-3xl text-center font-serif border-b-2 pb-2 border-gray-400" style={{ width: "30vw", margin: "auto" }}>Explore Our Categories</h1>
            <br />
            <p className="font-thin text-1xl text-center">Canvas Stocks - Where art meets life. Explore our collection: canvas prints, mugs, pillows, and more. Unleash your <br /> creativity, find the perfect piece, and make your space unique.</p>

            <br />
            <div id='corousal-wrapper'>
                <img src={Image} alt="" id='negative' onClick={handlenegativeClick}/>
                <img src={Image} alt="" id='positive' onClick={handlepositiveClick}/>
                <div id='corousal-container'>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697898665/canvasStocks/Screenshot2023-10-21at8.00.40PM_11zon.png" alt="" srcset="" />
                        </div>
                        <h1 className="font-bold text-center text-base">Wall Hanging Canvas Prints</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697897838/canvasStocks/Screenshot2023-10-21at7.47.06PM.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center text-base">Canvas Wall Display</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697897340/canvasStocks/Screenshot2023-10-21at7.24.52PM_11zon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center text-base">Birthday Canvas</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697895356/canvasStocks/Screenshot2023-10-21at7.05.21PM_11zon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center text-base">Wedding Canvas Prints</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697895096/canvasStocks/Screenshot2023-10-21at6.57.58PM_1_11zon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center text-base">Large Canvas Prints for Home</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697140815/canvasStocks/41751.jpg" alt="" />
                        </div>
                        <h1 className="font-bold text-center text-base">Lyrics Canvas</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
