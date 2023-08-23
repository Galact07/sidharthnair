import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Logo from '../public/assets/aremovebg.png';
import Link from 'next/link';
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
           <Link href="#mainBody"> <Image src={Logo} alt="" width='120' height="60"/></Link>
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
          <Link href='https://drive.google.com/file/d/1oNlWREWg0SzOppHAP3yOuuZgqxpyI-rc/view?usp=sharing' target='_blank' rel="noopener noreferrer">
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
