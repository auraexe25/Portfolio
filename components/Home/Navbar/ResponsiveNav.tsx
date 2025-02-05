'use client';
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavhandler=()=>setShowNav (true);
  const closeNavHandler=()=>setShowNav (false);

  return (
    <div>
        <Navbar openNav={showNavhandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandler}/>

    </div>
  )
}

export default ResponsiveNav
