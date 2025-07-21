'use client';
import { Baseinfo } from 'Data/Data'
import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full h-screen pt-[4vh] md:pt-[12vh]  bg-gradient-to-br from-black to-[#27004d] relative'>
      <div className="flex justify-center mt-8 flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items: center gap-12"> 
            {/* Content */}
            <div> 
                <p>
                <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-medium md:leading-[3.5rem] xl:leading-[4rem]'> Hi, I am </span>
                <span className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-heading text-purple-400 font-medium md:leading-[3.5rem] xl:leading-[4rem]'>{Baseinfo.name}</span>
                </p>
                {/*Description */}
                <p className="mt-6 sm:text-sm md:text-md lg:text-xl xl:text-xl text-[#a6a6a6] font-body">
                {Baseinfo.description}
                </p>
                {/* Buttons */}
                <div className='flex flex-col md:flex-row space-x-6 '> 
                <button className='mt-8 md:px-10 md:py-3.5 px-8 py-1.5 bg-[#6d5efb] font-body font-semibold border-2 border-[#6d5efb] text-white text-sm md:text-lg rounded-lg transition-all duration-200 hover:bg-blue-900  hover:box-border hover:border-2 hover:border-white hover:transition flex items-center justify-center'>
                  <a href="https://drive.google.com/file/d/1Jvq0oh5j3oE1T-NVy70R7NaPBdV7cyN0/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                    <span>Download CV</span>
                  </a>
                </button>
                <button className='mt-8 md:px-10 md:py-3.5 px-8 py-1.5 bg-[#6d5efb] font-body font-semibold border-2 border-[#6d5efb] text-white text-sm md:text-lg rounded-lg transition-all duration-200 hover:bg-blue-900  hover:box-border hover:border-2 hover:border-white hover:transition flex items-center justify-center'>
                    <a href="#contact" className="w-full h-full flex items-center justify-center"><span>Contact me</span></a>
                </button>
                </div>

            </div>
            {/* Image */}
            <div className='mx:auto block rounded-lg transition-all border-solid border-4 border-blue-900 overflow-hidden'>
              <div className="relative w-full h-[500px]">
              <Image 
                src={Baseinfo.profilepic} 
                alt={'profile picture'} 
                fill
                style={{objectFit: 'cover'}}
                className="w-full h-full"
              />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
