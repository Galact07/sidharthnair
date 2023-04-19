import React from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub,  AiOutlineMail} from 'react-icons/ai';
import Link from 'next/link'; 

const MainBody = () => {
  return (
    <div id='mainBody' className="w-full h-screen text-center ">
        <div className='max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center'>
            <div className='mt-16'>
           
            <h1 className='py-4 text-white'>Hey, <span className='text-[#5651e5]'>Sid</span> here!</h1>
            <h1 className='py-2 text-white'><span className='text-[#5651e5]'>Blockchain</span> & <span className='text-[#5651e5]'>Frontend</span> Developer</h1>
          
            {/* <p className='text-md max-w-[70%] m-auto mt-10'>Hi, I'm a Blockchain and Frontend Developer. I'm excited to start my journey in this rapidly growing field. With my passion for technology and my eagerness to learn, I hope to develop my skills in creating decentralized applications that can be accessed by anyone around the world. I'm also excited to learn about frontend development and create user interfaces that are user-friendly and visually appealing.
            </p> */}
            <div className='mt-12 flex justify-between items-center max-w-[330px] m-auto py-6 gap-8'>
            <Link href="#https://www.linkedin.com/in/sidharth-nair-2056a01bb/">
            <div className="p-4 cursor-pointer bg-violet-500 shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                <AiFillLinkedin size={20}/>
              </div>
                </Link>
              
              <div className="p-4 cursor-pointer bg-violet-500  shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                <AiFillInstagram size={20}/>
              </div>
              <div className="p-4 cursor-pointer bg-violet-500  shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                <AiFillGithub size={20}/>
              </div>
              <div className="p-4 cursor-pointer bg-violet-500  shadow-lg rounded-full shadow-black hover:scale-110 ease-in duration-300">
                <AiOutlineMail size={20}/>
              </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default MainBody