import Image from 'next/image';
import React from 'react';

import materialUiImg from '../public/assets/materialUi.png';
import javascriptImg from '../public/assets/javascript.png';
import htmlImg from '../public/assets/html.png';
import cssImg from '../public/assets/css.png';
import gitHubImg from '../public/assets/github.png';
import nextJsImg from '../public/assets/nextjs.png';
import reactImg from '../public/assets/react.png';
import tailwindImg from '../public/assets/tailwind.png';
import typescriptImg from '../public/assets/typescript.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-xl rounded-xl  bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={htmlImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={cssImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={javascriptImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Javascript</h3>
                </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={reactImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl  bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={nextJsImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Netxjs</h3>
                </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={tailwindImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={materialUiImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Material UI</h3>
                </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl  bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={gitHubImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Github</h3>
                </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl bg-white hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image 
                    src={typescriptImg}
                    width='64px'
                    height='64px'
                    alt="/"
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Typescript</h3>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Skills;
