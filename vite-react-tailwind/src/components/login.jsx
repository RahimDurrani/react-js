import React from 'react'
import lg from '../images/greenLogo.png'
import '../main.css'
import { TEInput, TERipple } from "tw-elements-react";
const login = () => {
  return (
    <>
       <section className="h-full bg-neut-200 dark:bg-neutral-100 ">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={lg}
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Ngen Team
                      </h4>
                    </div>

                    <form>
                     <div className='grid grid-cols-1'>
                      {/* <!--Username input--> */}
                      <label htmlFor="">User Name</label>
                      <input className='border rounded' type="text" />
                      

                      {/* <!--Password input--> */}
                       <label htmlFor="">Password</label>
                      <input className='border rounded' type="text" />
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                   
                          <button
                            className=" bg-gradient-to-br from-lime-500 via-violet-600 to-green-600  hover:text-black cursor-pointer mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  "
                            type="button"
                            
                          >
                            Log in
                          </button>
                      

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out cursor-pointer hover:bg-white hover:text-black  "
                          >
                            Register
                          </button>
                     
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none   bg-gradient-to-br from-lime-500 via-violet-600 to-green-600"
                  
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default login
