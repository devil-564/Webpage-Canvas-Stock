import React, { useState } from 'react'
import Image from '../assets/left-arrow.png'

const Gift = () => {
    const [giftCount, setgiftCount] = useState(0)

    const handlenegativeClick = (e) => {
        const corousal = document.getElementById('corousal-container1')

        if (giftCount == 1) {
            corousal.style.right = "0vw"
            setgiftCount(0)
        }
    }
    const handlepositiveClick = (e) => {
        const corousal = document.getElementById('corousal-container1')
        console.log("hello")
        if (giftCount == 0) {
            corousal.style.right = "21vw"
            setgiftCount(1)
        }
    }

    return (
        <>
            <h1 className="font-bold text-3xl text-center font-serif border-b-2 pb-2 border-gray-400" style={{ width: "15vw", margin: "auto" }}>Most Gifted</h1>
            <br />
            <p className="font-thin text-1xl text-center">Discover our 'Most Gifted' collection, where we've curated the most beloved and popular items. These timeless <br />pieces, from canvas prints to charming mugs, make for thoughtful, heartwarming gifts.</p>

            <br />
            <div id='corousal-wrapper'>
                <img src={Image} alt="" id='negative' onClick={handlenegativeClick} />
                <img src={Image} alt="" id='positive' onClick={handlepositiveClick} />
                <div id='corousal-container1'>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697977714/canvasStocks/Screenshot2023-10-22at5.57.34PM_11zon.png" alt="" srcset="" />
                        </div>
                        <h1 className="font-bold text-center">Aesthetic Flower Pot Art</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697899404/canvasStocks/Screenshot2023-10-21at8.12.55PM_11zon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Mother's Day Canvas</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697898665/canvasStocks/Screenshot2023-10-21at8.00.40PM_11zon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Wall Hanging Canvas Prints</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697898410/canvasStocks/Screenshot2023-10-21at7.56.04PM_11zon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Butterfly Split Canvas</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697897838/canvasStocks/Screenshot2023-10-21at7.47.06PM.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Canvas Wall Display</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697897481/canvasStocks/Screenshot2023-10-21at7.41.09PM.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Beautiful Girl Canvas</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gift
