import Image from 'next/image';
import React from 'react'
import adidasC19 from '../public/assets/projects/adidas.png'
import {RiRadioButtonFill} from 'react-icons/ri';
import Link from 'next/link';

 const adidas = () => {
  return (
   <div className='w-full'>
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
      <Image className='absolute z-1' layout='fill' objectFit='cover' src={adidasC19} alt='/'/>
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2>Adidas C19</h2>
        <h3>Vanilla Js</h3>
      </div>
    </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overwiew</h2>
          <p>
            a´pgjaóbjs´boisjsflawawvkadboskdnbsopbknspobknsopbnsdopbnsbpon
            ksbopnbsdoffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            rrrrrrrrrrrrrrrrrrrrrrrrrrrflamengoafafagagagagagqetqgerwh
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
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='pr-1'/> HTML</p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill  className='pr-1'/> CSS</p>
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
export default adidas;
