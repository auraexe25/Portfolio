'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const techStack = [
  'html.png',
  'tailwind.png',
  'javascript.png',
  'typescript.png',
  'firebase.png',
  'react.png',
  'css.png',
  'mongo-db.png',
  'git.png'
];

const Tech = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 7;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? techStack.length - itemsPerPage : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= techStack.length - itemsPerPage ? 0 : prev + 1));
  };

  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] pb-[12vh] h-full bg-gradient-to-br from-black to-[#27004d] relative ' id="techstack">
     <div className="flex flex-col w-full h-full mx-auto">
     <h1 className=' md:pl-[10rem] pl-8 text-3xl sm:text-xl md:text-6xl font-heading text-white font-medium md:leading-[3.5rem] xl:leading-[4rem]'>Tech Stack</h1>
            <div className="relative flex flex-col items-center justify-center rounded-full mt-4 py-10 bg-gradient-to-r from-blue-900 to-purple-900 ">
            <div className="relative flex items-center w-full ">
            <button onClick={prevSlide} className="absolute hover:text-[#27004d] left-0 rounded-full text-white  text-3xl pl-3 ">
            <FaChevronLeft />
            </button>
        
            <div className="flex gap-10 overflow-hidden w-full justify-center">
            {techStack.slice(currentIndex, currentIndex + itemsPerPage).map((icon, index) => (
                <div
                key={index}
                className="transition-transform duration-300 ease-in-out transform hover:scale-125 hover:opacity-100"
                style={{ padding: '15px' }}
                >
                <Image
                    src={`/assets/tech/${icon}`}
                    alt={icon.replace('.png', '')}
                    width={100}
                    height={100}
                    className="rounded-lg"
                />
                </div>
            ))}
            </div>

            <button onClick={nextSlide} className="absolute right-0 text-white hover:text-[#27004d] text-3xl pr-3">
            <FaChevronRight />
            </button>
        </div>
        </div>
    </div>
    </div>
   
  );
};

export default Tech;

