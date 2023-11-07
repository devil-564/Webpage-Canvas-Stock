import React from 'react'
import search from "../assets/magnifying-glass.png"
import user from "../assets/user.png"
import cart from "../assets/shopping-cart.png"

const Navbar = () => {

    return (
        <>
            <div className=' bg-black text-white w-full h-12 font-light'>
                <marquee behavior="" direction="" className = "pt-2">BIGGEST SALE 2023 - BUY 1 GET 1 FREE CANVAS PRINT. GET FREE SHIPPING ON ORDERS OVER ₹199 | USE CODE: INBOGO | VIEW MORE OFFERS</marquee>
            </div>
            <nav className='bg-white w-full flex flex-row justify-evenly h-16' style={{alignItems: "center"}}>
                <img src="https://canvas-stocks-frontend.onrender.com/assets/Logowhite-8a7d01b2.png" alt="" className=' w-44 h-17'/>
                <h1 className='font-bold text-lg'>Canvas Products</h1>
                <h1 className='font-bold text-lg'>Special Print</h1>
                <h1 className='font-bold text-lg'>Gift Prints</h1>
                <h1 className='font-bold text-lg'>Home Decor</h1>
                <h1 className='font-bold text-lg'>Special Occasions</h1>
                <h1 className='font-bold text-lg'>Festivals</h1>
                <h1 className='font-bold text-lg'>Cities</h1>
                <h1 className='font-bold text-lg'>Offers</h1>
                <img src={search} alt="" className='w-6 h-6'/>
                <img src= {user} alt="" className='w-6 h-6'/>
                <img src={cart} alt="" className='w-6 h-6'/>
            </nav>
        </>
    )
}

export default Navbar
