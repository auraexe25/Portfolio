"use client"; 

import React from 'react';
import { aboutInfo } from 'Data/Data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';

interface AboutInfoProps {
  icon: string;
  iconbg: string;
  title: string;
  subtitle: string;
  datas: string;
}

const AboutCard = ({ aboutInfo }: { aboutInfo: AboutInfoProps }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg,#19062b, #3e003e)",
        color: "#fff",
        borderRadius: "20px", 
        border: "2px solid white", 
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
      }}
      contentArrowStyle={{ borderRight: "10px solid white"}}
      iconStyle={{ background: aboutInfo.iconbg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={aboutInfo.icon}
            alt={aboutInfo.title}
            width={40}
            height={40}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
    <h3 className="text-xl font-heading text-white">{aboutInfo.title}</h3>
    <h4 className="text-sm font-body">{aboutInfo.subtitle}</h4>
    <p className="mt-5 text-white">{aboutInfo.datas}</p>
    </VerticalTimelineElement>
  );
};

const AboutMe = () => {
  return (
    <div className="bg-[url('/assets/aboutbg2.jpg')] bg-cover bg-center scroll-smooth" id = "about">
      
      <h1 className=" pt-10 sm:text-xl md:text-6xl text-white font-heading text-center">
        About me
      </h1>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {aboutInfo.map((info, index) => (
            <AboutCard key={`about-${index}`} aboutInfo={info} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default AboutMe;
