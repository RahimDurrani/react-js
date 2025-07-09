import React from 'react'
import "../main.css"
import aplg from '../images/apple 2.png'
import pllg from '../images/playstore.png'
const footer = () => {
  return (
    <>
        
   <footer className="bg-gray-100 text-black w-full ">
  

  {/* <!-- Link Grid Section --> */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 py-10">
    {/* <!-- MY Housing Hunt --> */}
    <div className="space-y-2">
      <h2 className="font-bold text-lg">MY Housing Hunt</h2>
      <a href="#About" className="text-slate-600 hover:text-green-500 block">About Us</a>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Press Room</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Work with Us</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Market Analysis</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Professional Features</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">News</span>
    </div>

    {/* <!-- Help --> */}
    <div class="space-y-2">
      <h2   className="font-bold text-lg">Help</h2>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">FAQs</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Contact</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Privacy</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Cookie Policy</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">General Conditions</span>
    </div>

    {/* <!-- Search --> */}
    <div class="space-y-2">
      <h2 class="font-bold text-lg">Search</h2>
      <a href="#distance" className="text-slate-600 hover:text-green-500 block">Search by Distance</a>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Search on Map</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Specify Search</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Search for Reservations</span>
      <span className="text-slate-600 hover:text-green-500 block cursor-pointer">Search by Reference Number</span>
    </div>

    {/* <!-- Get App --> */}
    <div className = "space-y-4">
      <h2 className ="font-bold text-lg">Get the App</h2>
      {/* <!-- App Store --> */}
      <div class="flex items-center bg-black rounded-2xl px-4 py-3 w-fit text-white cursor-pointer">
        <img src={aplg} alt="Apple" class="w-6 h-6 mr-3" />
        <div>
          <p className="text-xs">Download on the</p>
          <p className="font-bold text-sm">App Store</p>
        </div>
      </div>
      {/* <!-- Play Store --> */}
      <div className="flex items-center bg-black rounded-2xl px-4 py-3 w-fit text-white cursor-pointer">
        <img src={pllg} alt="Play Store" class="w-6 h-6 mr-3" />
        <div>
          <p className="text-xs">Download on the</p>
          <p className="font-bold text-sm">Play Store</p>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default footer
