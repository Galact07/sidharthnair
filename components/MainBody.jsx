import React from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub,  AiFillTwitterCircle} from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image'
import mainImg from '../public/assets/pixel.jpg'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const MainBody = () => {
  return (
    <div id='mainBody' className="w-full h-screen text-center ">
        <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center relative'>
            <div className='mt-16 z-10'>
           
            <h1 className='py-4 text-white'>Hey, <span className='text-[#5651e5]'>Sid</span> here!</h1>
            <h1 className='py-2 text-white'><span className='text-[#5651e5]'>Blockchain</span> & <span className='text-[#5651e5]'>Frontend</span> Developer</h1>
          
            {/* <p className='text-md max-w-[70%] m-auto mt-10'>Hi, I'm a Blockchain and Frontend Developer. I'm excited to start my journey in this rapidly growing field. With my passion for technology and my eagerness to learn, I hope to develop my skills in creating decentralized applications that can be accessed by anyone around the world. I'm also excited to learn about frontend development and create user interfaces that are user-friendly and visually appealing.
            </p> */}
            <div className='mt-12 flex justify-between items-center max-w-[330px] m-auto py-6 gap-8'>
            <Link href="https://www.linkedin.com/in/sidharth-nair-2056a01bb/" target='_blank' rel="noopener noreferrer">
            <div className="p-4 cursor-pointer bg-violet-500 shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                <AiFillLinkedin size={20}/>
              </div>
                </Link>
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