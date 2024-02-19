import React, { ReactNode } from 'react'
import { Inter } from "next/font/google";
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';
import { Lilita,Pops,Bebas } from '@/fonts/Fonts';
import ScrollToTop from "react-scroll-to-top";
import { FaSpaceAwesome } from "react-icons/fa6";
import { SiRetroarch } from 'react-icons/si';



const inter = Inter({ subsets: ["latin"] });
interface Layoutprops {
    children: ReactNode;
}

const Layout = ({children}: Layoutprops) => {
  return (
    <div className={`${Pops.className}`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="System"
        enableSystem
        disableTransitionOnChange

      >
      <Navbar  />
        <div className=' w-[100%]'>{children}</div>
        <ScrollToTop  smooth component={<SiRetroarch className='text-[35px] ScrollIcon w-[100%]'/>} style={{ 
          height: '55px',
          width: '55px',
          fontSize: '1.7rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: '#0d1c27',
          color: '#fff',
          boxShadow: '0px 0px 0px 0px', 
        
      }} className=' ScrollIcon'> </ScrollToTop>
      <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Layout
