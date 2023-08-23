import React,{useEffect} from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub,  AiFillTwitterCircle} from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image'
import mainImg from '../public/assets/pixel.jpg'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Typewriter from 'typewriter-effect';
import { Canvas } from '@react-three/fiber';
import { EnvironmentBase } from './EnvironmentBase';
import { TestExp } from './TestEXp';



const MainBody = () => {
 
  return (
    <div id='mainBody' className="w-full h-screen  ">
      
     
        <div className='max-w-[1140px] w-full h-full m-auto px-4 py-2 flex z-10 justify-center items-center relative'>
            <div className='mt-16 z-10'>
           <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
           <div className="flex flex-col justify-center mt-5 min-w-lg">
           <h2 className='py-4 text-5xl text-white'>Hey, <span className='text-[#5651e5]'>Sid</span> here!</h2>
            <h2 className="py-2 text-5xl text-white flex flex-col">
  <span className="block text-5xl text-[#5651e5]">
    <Typewriter
      options={{
        strings: ['Web','UI/UX','Blockchain'],
        autoStart: true,
        loop: true,
        changeDelay: 3  
      }}
    />
  </span>
  <span className="block text-5xl mt-6">Developer</span>
</h2>
  <div className='mt-16 flex  justify-center items-center max-w-[330px]  py-6 gap-8'>
           
            <div className="p-4 cursor-pointer bg-violet-500 shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
            <Link href="https://www.linkedin.com/in/sidharth-nair-2056a01bb/" target='_blank' rel="noopener noreferrer">
                <AiFillLinkedin size={20}/>
                </Link>
              </div>
               
              <Link href="https://www.instagram.com/sidnair07/" target='_blank' rel="noopener noreferrer" >
              <div className="p-4 cursor-pointer bg-violet-500  shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                <AiFillInstagram size={20}/>
              </div>
              </Link>
              <Link href="https://github.com/Galact07" target='_blank' rel="noopener noreferrer">
              <div className="p-4 cursor-pointer bg-violet-500  shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                <AiFillGithub size={20}/>
              </div>
              </Link>
              <Link href="https://twitter.com/sidnairr07" target='_blank' rel="noopener noreferrer">
              <div className="p-4 cursor-pointer bg-violet-500  shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                <AiFillTwitterCircle size={20}/>
              </div>

              </Link>            
              </div>
           </div>
           <div className="hidden sm:hidden md:grid md:col-span-2 w-full h-[70vh] z-0 rounded-lg">
      <Canvas shadows camera={{position:[0,0,10], fov:65}}>
        <EnvironmentBase/>
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
        
    </div>
  )
}

export default MainBody