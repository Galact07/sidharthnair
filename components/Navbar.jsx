import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Logo from '../public/assets/aremovebg.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {AiOutlineClose, AiOutlineMenu, AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
import { toast } from "react-hot-toast";
// import resume from '../public/assets/resume.pdf'

const Navbar = () => {
  
    const [navSidebar,setNavSidebar]= useState(false);
    const [shadow,setShadow] = useState(false);
    const [navBg,setNavBg] = useState("#ecf0f3");
    const [navLinkColor,setNavLinkColor] = useState('#1f2937')



    const handleClick=()=>{
        setNavSidebar(!navSidebar)
    }

    useEffect(()=>{
        toast.success("Welcome to my portfolio! 🎉");
        const handleShadow=()=>{
            if(window.scrollY>=90){
                setShadow(true);
            }else{
                setShadow(false);
            }
        }
        window.addEventListener('scroll',handleShadow);
        return ()=> toast.remove();
    },[])

  return (
    <div className={shadow ? "bg-black fixed w-full h-20 z-[100] shadow-lg -mt-4" :"fixed w-full h-20 z-[100] -mt-4"}>
        <div className='flex justify-between items-center pt-2 w-full h-full  2xl:px-16'>
           <Link href="#mainBody" className="mb-3">
           {/* <Image src={Logo} alt="" width='120' height="60"/> */}
           <motion.svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" className=''><path fill="#fff" d="M89.55,108.6q-1.85,0.75-3.175,0.75t-1.325-0.55q0-0.35,1.475-0.4t2.125-0.35q1.9-1,1.9-2.95q0-1-0.55-2.1q-1.6-2.85-7.75-2.85q-3.55,0-7.1,1.075t-5.95,3.3t-2.4,4.125q0,2.9,5.75,4.25l5.9,1.1q3.55,0.65,5.3,1.8q2.3,1.4,2.3,4q0,1.05-0.35,2.25q-1.6,5.4-8.25,8.25q-5.55,2.45-13.1,2.45q-2.15,0-3.75-0.2q1.6,0.9,4.2,1.55q0.2,0.05,0.2,0.2q0,0.45-1.05,0.45q-2.05,0-5.1-2.45q-4.15-0.65-6.2-2.3q-1.3-1.05-2.4-3.1t-1.1-3.7t0.65-2.75q1.5-2.65,3.8-2.65q1.75,0,2.05,2.95q0.7,5.7,0.95,6.5q0.75,2.45,2.55,4.15q2.1,0.45,4.55,0.45q5.4,0,10.6-2.15t7.5-6.1q0.95-1.55,0.95-2.75q0-2.35-4.15-3.65l-8.8-2q-2.7-0.65-4.325-2.15t-1.625-3.45q0-3,3.75-6q2.85-2.3,6.975-3.575t8.1-1.275t6.575,1.15q3.35,1.55,3.35,4.525t-3.05,4.175z M57.35,130.9q-2.9-3.2-3.7-8.75q-0.45-3.15-0.85-3.15t-0.75,0.225t-0.7,0.975t-0.35,1.95q0,3.85,2.7,6.6q1.35,1.4,3.65,2.15z M109.7085,129.4q-1.2,1.85-1.2,2.425t0.45,0.775q0,0.1-0.825,0.625t-2.275,0.525t-1.45-0.75q0-1.3,4.925-8.625t6.475-10.125q3.4-6.1,3.4-9.65q0-1.4-0.55-2.6q-0.85-1.8-4.1-1.8q-5.95,0-12.65,5.45q-5.1,4.2-7.85,8.7q-2.5,4.25-2.5,7.6q0,4.8,4.45,4.9l0.4,0q5.9,0,8.95-4.15q1.2-1.65,1.2-2.8t-0.55-1.45q-0.05-0.05-0.05-0.2t0.3-0.15q1.3,0,1.3,1.7q0,1.05-1,2.85t-3.625,3.4t-5.975,1.6t-5.3-1.95t-1.95-5.25q0-7.8,10.7-16.4q2.7-2.15,7.025-3.6t7.85-1.45t4.975,1.325t1.45,3.675q0,5.7-6.9,16.15q1.55-1.95,5.05-4.95q12.45-10.45,21.4-13.75q0.45-0.2,1-0.2q1.9,0,2.4,2.15q0.25,0.85-2.4,3.55q-6.25,6.4-10.6,14t-4.35,10.9q0,0.8,0.3,1.125t0.95,0.2t2.725-1.025t2.725-1.05q0.25,0.1,0.25,0.25q0,0.75-2.625,2.1t-3.925,1.35t-1.65-0.45q-0.9-1.25-0.9-3.15q0-4.3,4.6-12.35q2.95-5.05,9.1-13.6q-6.65,0.6-17.2,10.5q-8.4,7.95-11.95,13.65z M145.517,129.3q0,0.35,0.1,0.85q0.05,0.6-0.6,0.6q-0.8,0-0.85-0.9q-0.05-0.25-0.05-0.85q0-5.3,6.725-12.9t16.125-15q-8-1.1-11.45-1.1t-5.6,0.9q-2.85,1.25-3.95,4.55q-0.4,1-1.175,1t-1.05-0.325t-0.275-0.575q0-0.45,0.2-1.1l0.9-1.8q0.5-1.05,0.5-1.8q0-1.55,0.5-1.45q0.4,0.3,0.4,1.55q3.5-3.15,9.4-3.15q2.55,0,6.675,0.975t6.275,1.275l2.55-1.9q0.15-0.1,0.475-0.1t0.975,0.675t0.65,1t-0.25,0.475q-12,8.7-20.25,16.85q-2.45,2.45-4.7,6.075t-2.25,6.175z"/><path fill="#" d=""/></motion.svg>

           </Link>
            <div className='px-2'>
            <ul style={{color:`${navLinkColor}`}} className='hidden md:flex '>
              
                <Link href="#mainBody">
                    <li className='ml-10 text-white uppercase text-sm hover:border-b'>Home</li>
                </Link>
                <Link href="/#about">
                    <li className='ml-10 text-white uppercase text-sm hover:border-b'>About</li>
                </Link>
                <Link href="#skills">
                    <li className='ml-10 text-white uppercase text-sm hover:border-b'>Skills</li>
                </Link>
                <Link href="#projects">
                    <li className='ml-10 text-white uppercase text-sm hover:border-b'>Projects</li>
                </Link>
                <Link href="#contacts" >
                    <li  className='ml-10 text-white uppercase text-sm hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleClick} className='md:hidden'>
            <AiOutlineMenu  size={25}/>
            </div>
          </div>
          <ul style={{color:`${navLinkColor}`}} className='hidden md:flex mr-3'>
          <Link href='https://docs.google.com/document/d/125rsUDQxnj-UhiW2AlYkB4prwYThlnqhRLGaNCjdS7U/edit?usp=sharing' target='_blank' rel="noopener noreferrer">
                    <button className='ml-10 text-white uppercase text-sm px-3 py-2 rounded-lg hover:scale-105 transition duration-200'>View Resume</button>
                </Link>
          </ul>
        </div>

        <div className={navSidebar ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70':""}>
            <div className={navSidebar ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-300' : 'fixed top-0 left-[-100%] w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-300'}>
            <div className='flex justify-between items-center w-full'>
                <Image src={Logo} alt="" width="100" height="70"/>
                <div className='p-3 rounded-full shadow-lg bg-violet-500 cursor-pointer' onClick={handleClick}>
                    <AiOutlineClose />
                </div>
            </div>
            <div className='border-b border-gray-600 my-5'>
                <p className='py-3 font'>Explore decentralized possibilities and embrace the future together.</p>
            </div>
            <div className='flex flex-col'>
            <ul className='uppercase'>
                <Link href="#mainBody">
                    <li className='py-3 text-sm'>Home</li>
                </Link>
                <Link href="/#about">
                    <li className='py-3 text-sm'>About</li>
                </Link>
                <Link href="#skills">
                    <li className='py-3 text-sm'>Skills</li>
                </Link>
                <Link href="#projects">
                    <li className='py-3 text-sm'>Projects</li>
                </Link>
                <Link href="#contacts" >
                    <li  className='py-3 text-sm'>Contact</li>
                </Link>
            </ul>
            <div className='pt-[4rem]'>
                <p className='uppercase tracking-widest text-[#5651e5]'>Connect With Me!</p>
                <div className='flex justify-between items-center w-full my-4 sm:w-[80%]'>
                    <Link href="https://www.linkedin.com/in/sidharth-nair-2056a01bb/" target='_blank' rel="noopener noreferrer">
                <div className='rounded-full p-2 bg-violet-500 shadow-lg hover:scale-110 ease-in duration-300'>
                    <AiFillLinkedin size={25}/>
                </div>
                </Link>
                <Link href="https://www.instagram.com/sidnair07/" target='_blank' rel="noopener noreferrer" >
                <div className='rounded-full p-2 bg-violet-500 shadow-lg hover:scale-110 ease-in duration-300'>
                    <AiFillInstagram size={25} />
                </div>
                </Link>
                <Link href="https://github.com/Galact07" target='_blank' rel="noopener noreferrer">
                <div className='rounded-full p-2 bg-violet-500 shadow-lg  hover:scale-110 ease-in duration-300'>
                    <AiFillGithub size={25}/>
                </div></Link>
                <Link href="https://twitter.com/sidnairr07" target='_blank' rel="noopener noreferrer">
                <div className='rounded-full p-2 bg-violet-500 shadow-lg  hover:scale-110 ease-in duration-300'>
                    <AiFillTwitterCircle size={25}/>
                </div></Link>
                    
                </div>
            </div>
            </div>
            
            </div>
            
        </div>
        
    </div>
  );
}

export default Navbar
