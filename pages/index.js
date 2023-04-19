import Head from "next/head"
import { Navbar,MainBody,About,Skills,Projects,Contacts } from "@/components"

export default function Home() {
  return (
    <>
    <Head>
        <title>Sidharth Nair</title>
    </Head>
    <div className="bg-tertiary relative z-0">
      
    <MainBody/>
    <About/>
    <Skills/>
    <Projects/>
    <Contacts/>
    </div>    
    </>
   
  )
}
