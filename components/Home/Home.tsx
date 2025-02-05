'use client';
import React from 'react'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Skills from './Skills/Skills'
import Tech from './TechStack/Tech';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Tech/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default Home
