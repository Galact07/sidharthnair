import React from 'react'
import Image from 'next/image'
import projectImg from '../public/assets/projects/property.jpg'
import Link from 'next/link'

const Projects = () => {
  return (
    <div id='projects' className='w-full h-[100%] py-16 px-5'>
        <div className='container max-w-[1240px] mx-auto'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I Have Built</h2>
            <div className='grid justify-center my-10 items-center  md:grid-cols-3 gap-8'>
            <div className='relative flex w-[90%] group rounded-lg h-auto mx-auto shadow-lg shadow-gray-500 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-lg group-hover:opacity-10' src={projectImg} alt="/"/>
                <div className='hidden group-hover:inline absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white text-center'>HUSTLE TO MUSCLE</h3>
                   
                    <Link href="https://github.com/Galact07/hustle2muscle">
                        <p className='text-center py-3 rounded-lg mt-4 bg-violet-400 text-lg  font-bold cursor-pointer'>Github</p>
                    </Link>
                </div>
            </div>
            <div className='relative flex w-[90%] group rounded-lg h-auto mx-auto shadow-lg shadow-gray-500 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-lg group-hover:opacity-10' src={projectImg} alt="/"/>
                <div className='hidden group-hover:inline absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-xl text-white tracking-wider text-center'>NFT DApp</h3>
                   
                    <Link href="https://github.com/Galact07/nft_dapp">
                        <p className='text-center py-3 rounded-lg mt-4 bg-violet-400 text-lg  font-bold cursor-pointer'>Github</p>
                    </Link>
                </div>
            </div>
            <div className='relative flex w-[90%] group rounded-lg md:h-auto mx-auto shadow-lg shadow-gray-500 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-lg group-hover:opacity-10' src={projectImg} alt="/"/>
                <div className='hidden group-hover:inline absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>CHATGPT-2</h3>
                    
                    <Link href="https://github.com/Galact07/2_chatgpt" target='_blank' rel="noopener noreferrer">
                        <p className='text-center py-3 rounded-lg mt-4 bg-violet-400 text-lg  font-bold cursor-pointer'>Github</p>
                    </Link>
                </div>
            </div>
            <div className='relative flex w-[90%] group rounded-lg h-auto mx-auto shadow-lg shadow-gray-500 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-lg group-hover:opacity-10' src={projectImg} alt="/"/>
                <div className='hidden group-hover:inline absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>CROWD-FUNDING</h3>
                   
                    <Link href="https://github.com/Galact07/CrowdFunding">
                        <p className='text-center py-3 rounded-lg mt-4 bg-violet-400 text-lg  font-bold cursor-pointer'>Github</p>
                    </Link>
                </div>
            </div>
            <div className='relative flex w-[90%] group rounded-lg h-auto mx-auto shadow-lg shadow-gray-500 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-lg group-hover:opacity-10' src={projectImg} alt="/"/>
                <div className='hidden group-hover:inline absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>WEB3-TEMPLATE</h3>
                   
                    <Link href="https://github.com/Galact07/gpt3_temp">
                        <p className='text-center py-3 rounded-lg mt-4 bg-violet-400 text-lg  font-bold cursor-pointer'>Github</p>
                    </Link>
                </div>
            </div>

            <div className='relative flex w-[90%] group rounded-lg h-auto mx-auto shadow-lg shadow-gray-500 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <Image className='rounded-lg group-hover:opacity-10' src={projectImg} alt="/"/>
                <div className='hidden group-hover:inline absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>CAMP-VIEW</h3>
                   
                    <Link href="https://github.com/Galact07/WEBDEV_Estate-Camps">
                        <p className='text-center py-3 rounded-lg mt-4 bg-violet-400 text-lg  font-bold cursor-pointer'>Github</p>
                    </Link>
                </div>
            </div>
        </div>
        </div>
        
        

    </div>
  )
}

export default Projects