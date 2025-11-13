"use client";
import React, { useState } from 'react'
import Navbar from './Navbar';
import MobileNav from './MobileNav';

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false)

  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false)

  return (
    <div className='overflow-hidden'>
      <Navbar
        openNav={handleShowNav}
      />
      <MobileNav
        showNav={showNav}
        closeNav={handleCloseNav}
      />
    </div>
  )
}
