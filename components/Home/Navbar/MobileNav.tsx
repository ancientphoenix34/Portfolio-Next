import { Navlinks } from '@/Constant/Constant'
import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {

  const navPosition = showNav ? "translate-x-0" : "-translate-x-full"

  return (
    <div className={`fixed inset-0 z-[1000] ${showNav ? "visible" : "invisible"}`}>
      {/*Overlay*/}
      <div
        onClick={closeNav}
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${showNav ? "opacity-70" : "opacity-0"}`}
      />
      {/*Sidebar*/}
      <div className={`${navPosition} fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-purple-700 transform transition-all duration-500 z-[1050] flex flex-col justify-center space-y-6`}>
        {/*Close icon*/}
        <X
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] text-white cursor-pointer sm:w-8 sm:h-8 w-6 h-6"
        />
        {Navlinks.map((link, index) => (
          <Link key={index} href={link.href} onClick={closeNav}>
            <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNav
