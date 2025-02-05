"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Navlinks } from '../../../constants/constants';
import Link from 'next/link'
import { HiBars3BottomRight } from "react-icons/hi2";


// Ensure correct import path
type Props={
  openNav:()=>void;
}

const Navbar = ({ openNav} : Props) => {

  const [NavBg, setNavBg] = useState(false);

  useEffect(()=>{
    const handler=()=>{
      if(window.scrollY>=90){
        setNavBg(true);
      }
      if (window.scrollY<90){
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', handler);
    return () => {
    window.removeEventListener('scroll', handler);
    };

  },[]);

  return (
    <div className={`fixed ${NavBg? 'bg-violet-950': 'fixed'} h-[12vh] z-[10] w-full transition-all duration-200` }>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">

      {/* Logo */}
      <Image src="/assets/logo.png" alt="logo" width={300} height={100} className="ml-[-0.5 rem] sm:ml-0 "/>

      {/* NavLinks */}
      <div className="hidden lg:flex items-end space-x-10">
        {Navlinks.map((Navlink) => (
          <Link key={Navlink.id} href={Navlink.url}>
            <p className='Nav_Link'>{Navlink.label}</p>
          </Link>
        ))}
      </div>

    {/*Burger Menu*/}
    <HiBars3BottomRight onClick={openNav} className='w-10 h-10 cursor-pointer text-white md-hidden'/>
      </div>
    </div>
  )
}

export default Navbar
