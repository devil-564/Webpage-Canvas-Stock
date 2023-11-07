import React from 'react'

const Footer = () => {
  return (
    <>
      <div id='footer-container'>
        <br />
        <br />
        <p className="text-center text-lg font-normal text-white">Sign up and join our list to hear about exclusive offers, new collections, and sale events.</p>
        <br />
        <div className="flex flex-row w-full justify-center">
          <input type="email" name="email" id="" placeholder='Enter your email' className=" bg-zinc-900 w-72 h-12 p-2 rounded" />
          <button className=" w-20 border-2 ml-5 rounded text-white">JOIN</button>
        </div>
        <br /> <br />

        <div className='flex flex-row w-full h-auto justify-around text-white'>
          <div className = "flex flex-col justify-around h-full">
            <h1 className='font-bold pb-2'>ABOUT US</h1>
            <div className='flex flex-col justify-center w-full h-auto '>
              <p className = "font-thin cursor-pointer">About Us</p>
              <p className = "font-thin cursor-pointer">Privacy Policy</p>
              <p className = "font-thin cursor-pointer">Blog</p>
              <p className = "font-thin cursor-pointer">Terms & Conditions</p>
            </div>
          </div>
          <div className = "flex flex-col justify-around h-full">
            <h1 className='font-bold pb-2'>USEFUL LINKS</h1>
            <div className='flex flex-col justify-center w-full h-auto '>
              <p className = "font-thin cursor-pointer">Contact us</p>
              <p className = "font-thin cursor-pointer">FAQs</p>
              <p className = "font-thin cursor-pointer">Become an affiliate partner</p>
            </div>
          </div>
          <div className = "flex flex-col justify-around h-full">
            <h1 className='font-bold pb-2'>FOLLOW US</h1>
            <div className='flex flex-col justify-center w-full h-auto '>
              <p className = "font-thin cursor-pointer">Instagram</p>
              <p className = "font-thin cursor-pointer">Facebook</p>
            </div>
          </div>
          <div className = "flex flex-col justify-around h-full">
            <h1 className='font-bold pb-2'>CONTACTS</h1>
            <div className='flex flex-col justify-center w-full h-auto '>
              <p className='pb-2'>Monday - Friday: 9am - 5 pm</p>
              <p className = "font-thin cursor-pointer">123456789</p>
              <p className = "font-thin cursor-pointer">123456789</p>
              <p className = "font-thin cursor-pointer">hello@print.com</p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <h1 className=' font-semibold text-white text-center '>© 2023 Copyright:Canvas Stocks</h1>
      </div>
    </>
  )
}

export default Footer
