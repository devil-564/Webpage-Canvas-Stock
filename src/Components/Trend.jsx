import React from 'react'

const Trend = () => {
    return (
        <>
            <h1 className="font-bold text-3xl text-center font-serif border-b-2 pb-2 border-gray-400" style={{ width: "30vw", margin: "auto" }}>Trending items for you</h1>
            <br />
            <p className="font-thin text-1xl text-center">Stay ahead of the curve with our 'Trending Items for You' selection. Explore the latest and hottest canvas prints, <br /> stylish mugs, and trendy pillows. Stay in vogue and add a touch of contemporary charm to your living spaces.</p>

            <br />
            <div id='corousal-wrapper'>
                <div id='corousal-container-x'>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697955585/canvasStocks/4964_11zon.jpg" alt="" srcset="" />
                        </div>
                        <h1 className="font-bold text-center">Drawing Area Large Canvas</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697898530/canvasStocks/Screenshot2023-10-21at7.58.15PM_11zon.png" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Travelling Canvas</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697140815/canvasStocks/41751.jpg" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Lyrics on Canvas</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697107607/canvasStocks/p1.jpg" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Nature's photo on Canvas</h1>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/do1yoqqak/image/upload/v1697107633/canvasStocks/section3.jpg" alt="" />
                        </div>
                        <h1 className="font-bold text-center">Hexagon canvas with couple <br />photo</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trend
