import React from 'react'
import Image from 'next/image'
import reactImg from '../public/assets/skills/react.png'
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import githib1Img from '../public/assets/skills/github1.png'
import mongoImg from '../public/assets/skills/mongo.png'
import javascriptImg from '../public/assets/skills/javascript.png'
import nodeImg from '../public/assets/skills/node.png'
import nextImg from '../public/assets/skills/nextjs.png'
import solidityImg from '../public/assets/skills/soliditybg.png'
import sqlImg from '../public/assets/skills/sql.png'
import hyperledger from '../public/assets/skills/hyperled.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import truffleImg from '../public/assets/skills/truffle.png'
import { useParallax } from 'react-scroll-parallax';



const Skills = () => {
  return (
    <div id='skills 'className='spinner w-full md:h-screen px-6 '>
        <div className='max-w-[1240px] m-auto flex flex-col justify-center h-[100%]'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Expertise</p>
                <h2 className='py-4'>I am Skilled At,</h2>
                <div   className='spinner min-w-[90%] mt-6 grid items-center md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
            
            <div className=' p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={reactImg} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>REACT</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg  shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={solidityImg} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>SOLIDITY</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={nextImg} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>NEXT</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={javascriptImg} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={htmlImg} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={hyperledger} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>HYPERLEDGER</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer shadow-lg bg-violet-500 shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={tailwindImg} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>TAILWIND</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer shadow-lg bg-violet-500 shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={mongoImg} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>MONGODB</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer shadow-lg bg-violet-500 shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src={truffleImg} alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>TRUFFLE</h3>
                    </div>
                </div>
            </div>
        </div>
            </div>
        
    </div>
  )
}

export default Skills