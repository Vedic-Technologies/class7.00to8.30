import React, { useState } from 'react';

import logo from '../assets/logoes/smile-mask.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [toggle, setToggle]=useState(false);   
  const downloadCV=()=>
  {

  }
  
  return (
    <nav className="">
      <div className="container mx-auto px-4 font">

        {/* Logo */}
        <div className="flex items-center justify-between h-16 sha">
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <i className="fa-solid fa-bars text-white block sm:hidden text-2xl cursor-pointer"
          onClick={()=>setToggle(!toggle)}
          ></i>
          {/* Menu items */}


                      {/* for large device */}

       
         
          <div className="hidden sm:block">
            <ul className="ml-4 flex items-center gap-14 font-semibold">
             
             <Link to='/'>
              <li className="text-gray-700 hover:text-blue-700">
                Home
              </li>
              </Link>
             

              <Link to='/projects'>
              <li className="text-gray-700 hover:text-blue-700">
              Small Projects
              </li>
              </Link>

              <Link to='/Skill'>
              <li className="text-gray-700 hover:text-blue-700">
              Medium Projects
              </li>
              </Link>

              <Link to='/About'>
              <li className="text-gray-700 hover:text-blue-700">
             Large Projects
              </li>
              </Link>
              <Link to='/About'>
              <li className="text-gray-700 hover:text-blue-700">
             Students Projects
              </li>
              </Link>
            </ul>
          </div>
          <div className="center">
             <i class="fa-solid fa-sun"></i>
            
          </div>
         

                        {/* for small device */}

                        { toggle && ( <div className=" block sm:hidden relative w-full bg-green-500 ">
            <ul className="ml-4 flex flex-col items-center absolute top-8 right-0 bg-red-500 w-full gap-10 p-8 ">
              <li className='bg-blue-300 w-full'>
                <a href="/" className="text-white hover:text-gray-300">Home</a>
              </li>
              <li >
                <a href="/portfolio" className="text-white hover:text-blue-700">Portfolio</a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>) }






        </div>
      </div>
    </nav>
  );
}

export default Navbar;
