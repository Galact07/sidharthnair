import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full md:h-screen px-6 '>
        <div className='max-w-[1240px] m-auto flex flex-col justify-center h-[100%]'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Expertise</p>
                <h2 className='py-4'>I am Skilled At,</h2>
                <div className='min-w-[90%] mt-6 grid items-center md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
            
            <div className=' p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/react.png" alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>REACT</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg  shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/soliditybg.png" alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>SOLIDITY</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/nextjs.png" alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>NEXT</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/javascript.png" alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/html.png" alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer bg-violet-500 shadow-lg shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/hyperled.png" alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>HYPERLEDGER</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer shadow-lg bg-violet-500 shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/tailwind.png" alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>TAILWIND</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer shadow-lg bg-violet-500 shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/mongo.png" alt='/' width="55" height="55"/>
                    </div>
                    <div className='text-center'>
                        <h3>MONGODB</h3>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-lg cursor-pointer shadow-lg bg-violet-500 shadow-black hover:scale-110 duration-500'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src="/../public/assets/skills/truffle.png" alt='/' width="55" height="55"/>
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