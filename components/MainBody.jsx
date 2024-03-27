import React,{useEffect} from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub,  AiFillTwitterCircle} from 'react-icons/ai';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { Canvas } from '@react-three/fiber';
import { EnvironmentBase } from './EnvironmentBase';
import {motion} from 'framer-motion'


const MainBody = () => {
  const mainVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeInOut' }
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 1, ease: 'easeInOut', staggerChildren: 6 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: 'easeInOut', staggerChildren: 0.5 }
    },
    exit: { opacity: 0, y: -100 }
  };

  return (
    <motion.div
      variants={mainVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      id='mainBody'
      className="w-full h-screen"
    >
      <div className='max-w-[1140px] w-full h-full m-auto px-4 py-2 flex z-10 justify-center items-center relative'>
        <div className='mt-16 z-10'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className='py-4 text-4xl md:text-5xl text-white stroke-1 stroke-white relative'>
                Hey, <span className='text-[#5651e5]'>Sid</span> here!
              </h2>
              <div>
                <h2 className="py-2 text-3xl md:text-4xl text-white">
                  <span>
                    <Typewriter
                      options={{
                        strings: ['Web Developer', 'UI/UX Designer'],
                        autoStart: true,
                        loop: true,
                        changeDelay: 3
                      }}
                    />
                  </span>
                </h2>
              </div>
              <motion.div
                variants={linkVariants}
                initial='hidden'
                animate='visible'
                className='mt-10 md:mt-16 flex justify-center md:justify-start items-center max-w-[330px] py-4 md:py-6 gap-6 md:gap-8 snap-center'
              >
                <div className="p-4 cursor-pointer bg-violet-500 shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/sidharth-nair-2056a01bb/" target='_blank' rel="noopener noreferrer">
                    <AiFillLinkedin size={20} />
                  </Link>
                </div>
                <Link href="https://www.instagram.com/sidnair07/" target='_blank' rel="noopener noreferrer" >
                  <div className="p-4 cursor-pointer bg-violet-500 shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                    <AiFillInstagram size={20} />
                  </div>
                </Link>
                <Link href="https://github.com/Galact07" target='_blank' rel="noopener noreferrer">
                  <div className="p-4 cursor-pointer bg-violet-500 shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                    <AiFillGithub size={20} />
                  </div>
                </Link>
                <Link href="https://twitter.com/sidnairr07" target='_blank' rel="noopener noreferrer">
                  <div className="p-4 cursor-pointer bg-violet-500 shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                    <AiFillTwitterCircle size={20} />
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className="hidden md:grid col-span-2 w-full h-[70vh] z-0 rounded-lg">
              <Canvas shadows camera={{ position: [0, 0, 10], fov: 65 }}>
                <EnvironmentBase />
              </Canvas>
            </div>
          </div>
        </div>
        {/* <div className='w-full absolute z-1'>
          <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
            <ParallaxBannerLayer image="../public/assets/pixel.jpg" speed={-20} />
          </ParallaxBanner>
        </div> */}
      </div>
    </motion.div>
  );
};

export default MainBody;