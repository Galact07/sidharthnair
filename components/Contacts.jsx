import React,{useRef} from 'react'
import Image from 'next/image'
import contactImag from '../public/assets/contacts.jpg'
import TechImg from '../public/assets/dp3.png'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail,AiFillTwitterCircle } from 'react-icons/ai'
import { FcCollapse } from "react-icons/fc";
import Link from 'next/link';
import emailjs from "@emailjs/browser"



const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p3rh5oc', 'template_msei1uo', form.current, '66jVVIDaGQ0Vg4_Dt')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div id='contacts' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] p-3 m-auto px-4 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h3>Get In Touch</h3>
        <h2 className='py-4'>Lets Have A Conversation!</h2>
        <div className='w-full flex justify-center mx-auto'>
        <div className='grid md:grid-cols-5 gap-15'>
         
            <div className='col-span-3 m-auto w-full bg-black h-auto shadow-lg shadow-black rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='grid md:grid-cols-2 gap-5 w-full'>
                            <div className='flex flex-col '>
                                <label className='uppercase text-sm '>Name</label>
                                <input className='bg-slate-600 rounded-lg p-3 my-2 ' type="text" name="user_name"/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm'>Phone Number</label>
                                <input className='rounded-lg bg-slate-600 p-3 border-2 my-2 border-gray-300' type="text" name="user_phone"/>
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm '>Subject</label>
                        <input className='rounded-lg p-3 bg-slate-600 border-2 my-2 border-gray-300' type="text" name="user_subject"/> 
                        </div>

                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm '>Email</label>
                        <input className='rounded-lg p-3 bg-slate-600 border-2 my-2 border-gray-300' type="text" name="user_email"/> 
                        </div>

                        <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm '>Message</label>
                        <textarea name="message" className='rounded-lg bg-slate-600 flex p-3 border-2 my-2 border-gray-300' rows="7"></textarea> 
                        </div>

                        <button value="Send" className='w-full p-4 bg-violet-500 text-gray-100 mt-4'>
                             Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className='bg-black col-span-3 lg:col-span-2  h-auto rounded-xl shadow-lg shadow-black p-3 gap-8'>
                <div className='w-[90%] m-auto py-3 lg:p-4 h-full'>
                <div className='rounded-xl  bg-violet-500 shadow-lg shadow-black p-2 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={contactImag} alt="/"/>
                </div>
                <div>
                <h2 className='py-2'>Sidharth Nair</h2>
                <p className='text-lg font-bold'>Ethereum Blockchain | Front-End Developer</p>
                <p className='py-4'>I am Available for Freelance, Internships and Full-time Jobs. Feel Free to connect with me</p>
                </div>
                <div>
                <p className='uppercase text-md pt-8'>Connect With me</p>
                <div className='flex gap-8 item-center w-full md:w-[75%] py-4'>
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
        
        <Link href="#mainBody">
        <div className='flex justify-center py-10 ml-20'>
            <div className='rounded-full p-2 bg-slate-500 shadow-lg shadow-black hover:scale-110 ease-in duration-300'>
                <FcCollapse size={25}/>
            </div>
        </div>
        </Link>
        
        </div>
    </div>
  )
}

export default Contacts