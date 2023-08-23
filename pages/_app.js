import '@/styles/globals.css'
import { Navbar } from '../components'
import { ThemeProvider } from 'next-themes';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';



export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   const use = async () => {
  //     (await import('tw-elements')).default;
  //   };
  //   use();
  // }, []);
  return (
    <ParallaxProvider>
      <Toaster position="top-center" reverseOrder={false}/>
      <ThemeProvider enableSystem={true} attribute="class">
        
        
        <Navbar/>
      <Component {...pageProps} />
    </ThemeProvider>
    </ParallaxProvider>
    
  );
}
