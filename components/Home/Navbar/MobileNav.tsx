'use client';
import Link from 'next/link'
import React from 'react'
import { Navlinks } from '../../../constants/constants'
import { CgClose } from 'react-icons/cg'



type Props={
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNav = ({closeNav, showNav}:  Props) => {

  const Navopen=showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/*Overlay*/}
      <div className={`fixed ${Navopen} transform transition-all duration-500 inset-0 bg-black bg-opacity-70 z-[1000] w-full h-screen`}></div>
      {/*Nav Links*/}
      <div className={`text-white ${Navopen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}>
      {Navlinks.map((Navlink) => (
          <Link key={Navlink.id} href={Navlink.url}>
            <p className='Nav_Link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{Navlink.label}</p>
          </Link>
        ))}
      {/*Close Button*/}
      <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:-8 w-6 h-6 text-white"/>
    
      </div>
    </div>
  )
}

export default MobileNav
