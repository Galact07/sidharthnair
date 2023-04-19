import React from 'react'
import Image from 'next/image'
import projectImg from '../../public/assets/projects/property.jpg'

export default function project_1() {
  return (
    <div className='w-full'>
        <div className='w-full relative h-[30vh] lg:h-[40vh]'>
            <div className='absolute top-0 left-0 h-[30vh] lg:h-[40vh] w-full bg-black/80 z-10'/>
            <Image className='absolute z-1' objectFit='cover' fill src={projectImg} alt="/"/>
            <div className='absolute z-10 top-[70%] max-w-[1240px] left-[50%] right-[50%] w-full translate-x-[-50%] translate-y-[-50%] text-white'>
                <h2 className='py-4'>Project info</h2>
                <h3>React / Solidity /Tailwind / Metamask</h3>
            </div>
        </div>
    </div> 
  )
}
