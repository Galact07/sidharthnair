import Head from "next/head"
import Image from "next/image"
import { Navbar,MainBody,About,Skills,Projects,Contacts, Experience } from "@/components"
import { Parallax } from 'react-scroll-parallax';
import bgImg from '../public/assets/bgImg.jpg'
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Home() {

  
  return (
    <>
    <Head>
        <title>Sidharth Nair</title>
    </Head>
    <div className="bg-tertiary z-0">
    <Parallax speed={-10} className="relative ">
    {/* <div className="absolute -z-10">
        <Image src={bgImg} alt="/" priority={true}/>
      </div> */}
      <div className="z-10">
      <MainBody/>
      </div>
    {/* <MainBody/> */}
    </Parallax>





    <Parallax speed={30}>
    <About/>
    </Parallax>
    <Parallax speed={10}>
    <Skills/>
    </Parallax>
    <Parallax speed={5}>
    <Experience/>
        </Parallax>
        <Parallax speed={10}>
        <Projects/>
        </Parallax>
    <Contacts/>
    </div>    
    </>
   
  )
}
