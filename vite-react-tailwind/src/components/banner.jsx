import React from 'react'
import '../main.css'
import img1 from '../images/server-2.png'


const Home = () => {
  return (
    <>
    {/* main */}
    <div className='bg-gradient-to-br from-lime-500 via-violet-600 to-green-600 p-20'>
        {/* head */}
      <div className='grid grid-cols-2 p-9' >
        {/* left */}
        <div className='  text-3xl font-bold p-10'>
        <h1 className='bg-gradient-to-r from-green-700 to-black bg-clip-text text-transparent'>Welcome to NGEN</h1>
        <h4 className='text-gray-600'>lets Build the Future togather!</h4>
        <p className=' text-2xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta accusantium labore eveniet quod
          ipsam laudantium quidem nulla eius aspernatur eligendi numquam, id est quae laborum laboriosam? Atque, dolorem
           nostrum.</p>
      </div>
      {/* right */}
    <div className=' '>
      <img className='h-[400px] w-[400px] ml-28' src={img1} alt="" />
    </div>
      
      </div>
  
      </div>
       
    </>
  )
}

export default Home
