import React from 'react'
import '../main.css'
const form = () => {
  return (
    <>
    {/* main */}
    <div className='p-3 flex items-center justify-between'>
      <div className='  h-64 w-96 gird items-center justify-center p-4 '>
        <div className='flex items-center justify-center text-2xl text-black '>
            <h2>signUp</h2>
        
        </div>
        <div className='grid grid-cols-2 gap-5 p-4'>
            <label htmlFor="">Name</label>
            <input className='border rounded' type="text" />

            <label htmlFor="">email</label>
            <input className='border rounded' type="email" />

            <label htmlFor="">Password</label>
            <input className='border rounded' type="password" />

            <label htmlFor="">Confrim password</label>
            <input className='border rounded' type="password" />
        </div>
        <div className='flex items-center justify-center p-3'>
        <button className=' bg-green-600 h-14 w-24 rounded '>
            Login
        </button>
        </div>
      </div>
      </div>
    </>
  )
};

export default form
