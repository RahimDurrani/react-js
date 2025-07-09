import React from 'react'
import '../main.css'
import node from '../images/node.png'
import python from '../images/python.png'
import ruby from '../images/ruby.png'
import php from '../images/php.png'
import c from '../images/C.png'

const use = () => {
  return (
    <>
    <div className='p-8'>
        <div className='bg-gradient-to-r from-green-400 to-black bg-clip-text text-transparent flex items-center justify-center font-bold h-12 text-4xl'>
                  <p>Supported Languages</p> 
                </div> 
      <div className='flex flex-1/2  content-center items-center justify-center gap-2  md:gap-7 h-50 p-7 '>       
        <div className='h-40 w-30 border-0 rounded-2xl shadow-lg shadow-indigo-500'>
           <h4 className='text-center'>Node</h4>
            <img className='h-30 w-50' src={node} alt="node" />
        </div>
            
                <div className='h-40 w-30 border-0 rounded-2xl shadow-lg shadow-indigo-500'>
                <h4 className='text-center'>Python</h4>
            <img className=' ' src={python} alt="python" />
        </div>
                <div className='h-40 w-30 border-0 rounded-2xl shadow-lg shadow-indigo-500'>
            <h4 className='text-center'>Ruby</h4>
            <img className=' ' src={ruby} alt="ruby" />
        </div>
                <div className='h-40 w-30 border-0 rounded-2xl shadow-lg shadow-indigo-500'>
            <h4 className='text-center'>PHP</h4>
            <img className='h-30 ' src={php} alt="php" />
        </div>
                <div className='h-40 w-30 border-0 rounded-2xl shadow-lg shadow-indigo-500'>
            <h4 className='text-center'>C</h4>
            <img className='h-30 ' src={c} alt="node" />
        </div>
      </div>
      </div>
    </>
  )
}


export default use
