import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Victor | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer trying building exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Victor Gonzalez</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/victor-gonzalez-4550a0176/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/victorgonzalezz'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              <span className='px-1'></span> Frontend Developer Javascript | React
            </p>
          </div>
        </div>
        <p>
          Motivated web development professional with extensive previous
          experience in the fitness market. Curious, obstinate, committed
          to customer satisfaction. Diverse analytical skills, team collaboration
          and relationship building. Engaged professional with solid interpersonal
          skills.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>NextJS
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>TailwindCSS
            <span className='px-2'>|</span>MaterialUI
            <span className='px-2'>|</span>ChakraUI
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            CODEZERO TECH
            </span>
            <span className='px-2'>|</span>Remote, Portugal
          </p>
          <p className='py-1 italic'>Junior Frontend Developer ( Nov 2021 - May - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
                Working on a Health Tech project in full production phase scheduled
                to be built in accordance with best practices as well as safety
                and quality requirements.
            </li>
            <li>
               Frontend project with Javascript, React and React-Native
            </li>
            <li>
              Responsible for creating the project pages using Material-UI.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            WRIGHTIA S.A
            </span>
            <span className='px-2'>|</span>Lisbon, Portugal
          </p>
          <p className='py-1 italic'>Junior Frontend Developer | April 2021 - Set 2021</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Mainly worked on two products: performance and demand improvements
              aimed at a better experience for internal employees of a
              telecommunications company and another that includes refactoring the
              code of the web application that Wrightia has.
            </li>
            <li>
              Implementing solutions in compliance with the best practices as well as
              afety and quality requirements.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Brazil - Portugal</span>
            <span className='px-2'>|</span>Florianópolis, SC | Porto, PT
          </p>
          <p className='py-1 italic'>Personal Trainer (2012 – 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            I worked as a Personal Trainer for the last ten years, attending
             to the most diverse types of people, many of whom with the most 
             diverse types of clinical pathologies, in addition to promoting 
             health as well as promoting aesthetic improvements and well-being.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;