'use client';
import React, { useState } from 'react'
import Image from "next/image";

type Props={
    skill:{
        id:number;
        title:string;
        description:string;
        icon:string;
    }
}
const SkillCard = ({skill}: Props) => {
    const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 rounded-xl border border-white bg-[#3c434d] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-shadow duration-200">
        <Image src={skill.icon} alt={skill.title} width={50} height={50} className='mx-auto'/>
        <h2 className= "mt-4 text-gray-300 text-center"> {skill.title}</h2>
        <p className={`mt-2 text-sm font-semibold text-white  transition-all duration-300 ${expanded ? "line-clamp-none" : "line-clamp-6"}`}>
          {skill.description}
        </p> 
        {skill.description.length > 100 && (
        <button
          className="mt-2 text-purple-400 hover:underline text-sm self-start"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "..Read More"}
        </button>
      )}
    </div>
  )
}

export default SkillCard
