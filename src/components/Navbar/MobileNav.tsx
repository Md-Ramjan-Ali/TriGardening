import Link from 'next/link'
import React from 'react'
import { MdClose } from 'react-icons/md'

type props = {
  showNav: boolean,
  closeNav: () => void
}
export default function MobileNav({ showNav, closeNav }: props) {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'


  return (
    <div>
      {/* overLay */}
      <div className={`fixed lg:hidden ${navOpen} inset-0 transform transition-all duration-500 z-1002 h-screen bg-black opacity-70 w-full`}></div>
      <div className={` lg:hidden ${navOpen} flex flex-col justify-center space-y-5 fixed transform transition-all bg-[#FF6A1A] duration-500 delay-300 w-[80%] sm:w-[60%] h-full z-1050`}>
        {/* navLinks */}
        <div className="flex flex-col items-center justify-center space-y-5 text-white text-lg overflow-hidden">
          <Link className="text-white text-lg" href="/">Home</Link>
          <Link className="text-white text-lg" href="/Products">Products</Link>
          <Link className="text-white text-lg" href="/Blog">Blog</Link>
          <Link className="text-white text-lg" href="/PlantClinic">Plant clinic</Link>
        </div>

        {/* close btn */}
        <MdClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white' />
      </div>
    </div>
  )
}
