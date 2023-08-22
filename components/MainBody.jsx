import React from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub,  AiFillTwitterCircle} from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image'
import mainImg from '../public/assets/pixel.jpg'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Typewriter from 'typewriter-effect';

const MainBody = () => {
  return (
    <div id='mainBody' className="w-full h-screen  ">
        <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center relative'>
            <div className='mt-16 z-10'>
           <div className="grid grid-cols-2 gap-20">
           <div className="flex flex-col justify-center mt-5 min-w-lg">
           <h1 className='py-4 text-white'>Hey, <span className='text-[#5651e5]'>Sid</span> here!</h1>
            <h1 className="py-2 text-white flex flex-col">
  <span className="block text-[#5651e5]">
    <Typewriter
      options={{
        strings: ['Web','UI/UX','Blockchain'],
        autoStart: true,
        loop: true,
        changeDelay: 3  
      }}
    />
  </span>
  {/* &amp; */}
  {/* <span className="text-[#5651e5]">
    <Typewriter
      options={{
        strings: ['Frontend', 'Blockchain'],
        autoStart: true,
        loop: true,
        changeDelay: 3
      }}
    />
  </span> */}
  <span className="block mt-6">Developer</span>
</h1>
           </div>

            <div className='mt-16 flex flex-col justify-end items-end max-w-[330px]  py-6 gap-8'>
           
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
           
            </div>
            <div className='w-full absolute z-1'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
  <ParallaxBannerLayer image="../public/assets/pixel.jpg" speed={-20} />
</ParallaxBanner>
      </div>
        </div>
       
    </div>
  )
}

export default MainBody