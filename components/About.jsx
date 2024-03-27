import React from 'react'
import TechImg from '../public/assets/dp3.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  const mainContainer={
    hidden:{
      opacity:0,
      x:`-100vw`,
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:2,
        ease:'easeInOut',
        staggerChildren:6
      }
    },
    exit:{
      opacity:0,
      y:-100,
      transition:{
        duration:1,
        ease:'easeInOut',
        
      }
    }
  }
  return (
    <motion.div 
    variants={mainContainer}
    initial='hidden'
    animate='visible'
     id='about' className='w-full mt-16 md:h-screen py-16 p-2 flex justify-center items-center '>
        <div className='px-5 max-w-[1240px] md:grid grid-cols-3 gap-6'>
            <div className='col-span-2 md:col-start-2'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Introduction</p>

            <h2 className='text-5xl tracking-widest'>Who Are You?<span className='text-[#5651e5]'>U ask</span> </h2>
            </div>
            <div className='sm:w-[30%] md:w-[60%] h-auto m-auto md:bg-violet-500 rounded-xl flex justify-center items-center shadow-xl shadow-black hover:scale-95 ease-in duration-500 p-4 mt-3'>
                <Image src={TechImg} alt="/" className='rounded-xl'/>
            </div>
            <div className="items-center col-span-2 pt-5">
                <p className='py-2 text-white'>As a Web Developer and UI/UX Designer, I have a deep passion for creating user-oriented websites and applications that provide a seamless user experience. I have honed my skills in web development using frameworks such as ReactJS and NextJS and in UI/UX using Figma, Webflow, Prototyping. I am also well-versed in Data Structures and Algorithms which allows me to develop efficient and scalable solutions.</p>
                <p className='py-2 text-white'>One of my greatest strengths is my ability to work effectively both independently and as part of a team. I believe that collaboration is key to success and I value open communication constructive feedback and continuous learning. I enjoy sharing my knowledge with others and learning from their experiences as well.</p>
                <p className='py-2 text-white'>My curiosity and enthusiasm drive me to continuously improve my skills and knowledge in web  development and UI/UX. I am always eager to explore new technologies and ideas that can enhance my work and deliver even better results for my clients.</p>
                <p className='py-2 text-white'>I am committed to delivering high-quality projects that meet or exceed my clients expectations. I believe that my technical expertise, communication skills, and passion make me an asset to any team or project. You can check out some of my previous projects on my GitHub page.</p>
            </div>
           
        </div>
    </motion.div>
  )
}

export default About