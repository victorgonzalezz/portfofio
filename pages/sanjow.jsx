import Image from 'next/image';
import React from 'react'
import sanjowApp from '../public/assets/projects/sanjowApp.png'
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

 const sanjow = () => {
  return (
   <div className='w-full'>
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
      <Image className='absolute z-1' layout='fill' objectFit='cover' src={sanjowApp} alt='/'/>
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2>Sanjow App</h2>
        <h3>Javascript | React | NextJS | Material UI</h3>
      </div>
    </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overwiew</h2>
          <p>
          This project was a challenge to be delivered as a selection process for a job opportunity. 
          By far, it was the hardest of all. The project consisted of consuming
           the reqres.in api, inserting pagination,
           editing individual profile data, etc. It was the project was made with
            React, NextJs, Typescript and ChakraUi.
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='pr-1'/> Javascript</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='pr-1'/> React</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='pr-1'/> NextJS</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='pr-1'/> ChakraUI</p>
            </div>
            
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
   </div>
  )
}
export default sanjow;
