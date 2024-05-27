import React, { useState,useEffect, useCallback } from 'react'
import { Bars3Icon} from '@heroicons/react/24/solid'

function Header() {
const[toggleMenu,setToggleMenu]=useState(false);

const handleScroll = useCallback(() => {
  if (toggleMenu) {
    setToggleMenu(false);
  }
},[toggleMenu]);
useEffect(() => {
  // Add event listener for scroll
  window.addEventListener('scroll', handleScroll);

  // Cleanup event listener on component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [handleScroll])

  return (
    <header className='flex justify-between px-5 py-3 bg-primary'>
        <a className='font-bold text-white'href="/">Portfolio</a>
<nav className='hidden md:block'>
<ul className='flex text-white'>
    <li><a href="/">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#Resume">Resume</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
</nav>
{toggleMenu &&<nav className='block md:hidden '>
<ul onClick={()=>setToggleMenu(false)} className='flex flex-col text-white mobile-nav'>
    <li><a href="/">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#Resume">Resume</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>
</nav>}
<button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>

    </header>
  )
}

export default Header