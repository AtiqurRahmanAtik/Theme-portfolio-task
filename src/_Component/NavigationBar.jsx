"use client"


import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import homeicon from "../../public/Images/Group 8392.png";


const dM_Sans = DM_Sans({
  subsets: ['latin'],
  weight : '700'
})

const dM_SansTitle = DM_Sans({
  subsets: ['latin'],
  weight : '400'
})

const NavigationBar = () => {

    const pathname = usePathname();

    const navLinks = <>
        <Link href={'/'}><li className={`${pathname === '/' ? "text-white border-b border-b-[#F89222] " : ""} text-white font-bold text-2xl  ${dM_Sans.className}`}>Home</li> </Link>
        <Link href={'/about'}><li className={`${pathname === '/about' ? "text-white border-b border-b-[#F89222] " : ""} text-white font-bold text-2xl ${dM_Sans.className}`}>about</li> </Link>
      
        

    </>;

    
    return (
        <>
        <nav className="navbar bg-[#121414]">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
       
      

       {navLinks}

      </ul>
    </div>
    <h3 className={`text-[2rem] font-bold text-white ${dM_Sans.className}`}>Daryl <span className='text-[#F89222]'> Smith</span> <br />
       <p className={`${dM_SansTitle.className}text-[#C2C2C2] font-normal text-[18px]`}>UI/UX designer</p>
    </h3> <br />

   
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-2">
     
       <Image className='space-x-3' src={homeicon}  alt='home'/>
     {navLinks}

    </ul>
  </div>

  <div className="navbar-end">
    <a className={`text-[#F89222] borderB  ${dM_Sans.className} font-bold text-[1rem]`}>Talk To Me</a>
  </div>
</nav>
            
        </>
    );
};

export default NavigationBar;