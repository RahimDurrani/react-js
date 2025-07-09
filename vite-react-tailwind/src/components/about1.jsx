import React from 'react'
import '../main.css'
import ab from '../images/about.png'
const help1 = () => {
  return (
    <>
      <div className='p-7'>
        {/* main-container */}
        <div className='w-full grid md:grid-cols-2 grid-cols-1 p-7 border-0 rounded-2xl bg-gradient-to-br from-lime-500 via-violet-600 to-green-600'>
     {/* left */}
        <div className='h-96 w-96 border-4 align-middle flex border-white rounded-full'>
            <img className=' object-contain flex justify-center items-center p-3' src={ab} alt="" />
        </div>
        {/* right */}
        <div className='p-14 text-2xl font-bold text-white'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni dignissimos nihil eligendi exercitationem.
                 Qui natus provident amet, nisi placeat accusantium. Est omnis autem labore dolor nihil mollitia corrupti asperiores.
                 Qui natus provident amet, nisi placeat accusantium. Est omnis autem labore dolor nihil mollitia corrupti asperiores.
                 </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default help1
