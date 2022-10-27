import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ProjectItem } from './ProjectItem';
import aluraProject from '../public/assets/projects/alura.png'
import adidasC19 from '../public/assets/projects/adidas.png'
import creditCardQlab from '../public/assets/projects/creditCard.png'
import sanjowApp from '../public/assets/projects/sanjowApp.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
         <ProjectItem 
            title='Alura Project'
            backgroundImg={aluraProject}
            projectUrl='/alura'
            />
         <ProjectItem 
            title='Adidas C19'
            backgroundImg={adidasC19}
            projectUrl='/adidas'
            />
         <ProjectItem 
            title='Credit Card Qlab'
            backgroundImg={creditCardQlab}
            projectUrl='/creditcard'
            />
         <ProjectItem 
            title='Sanjow App'
            backgroundImg={sanjowApp}
            projectUrl='/sanjow'
            />
        </div>
      </div>
    </div>
  )
}
export default Projects;
