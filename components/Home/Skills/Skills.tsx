'use client';
import { skillsinfo } from 'Data/Data';
import React from 'react'
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] pb-[12vh] h-full bg-gradient-to-br from-black to-[#27004d] relative' id="skills">
        <div className="flex flex-col w-4/5 h-full mx-auto">
        <h1 className='text-3xl sm:text-xl md:text-6xl font-heading text-white font-medium md:leading-[3.5rem] xl:leading-[4rem]'>Skills</h1>
          <div className="grid grid:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full mx-auto items-center mt-10">
              {skillsinfo.map((skill)=>{
                return <div key={skill.id}>
                  {/*Skill Card*/}
                  <SkillCard skill={skill}/>
                </div>
              })}
          </div> 
        </div>    
    </div>

  )
}

export default Skills
