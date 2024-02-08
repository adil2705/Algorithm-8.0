import React, { useState } from "react";

import { Link } from "react-router-dom";

import { logo } from "../assets/images";

import { auth } from "../firebase-config";

const Navbar = ({
  user
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section>
      <nav className="relative px-16 py-4 flex justify-between items-center bg-blur">
        <img src={logo} alt='logo' className='w-16 h-16 object-contain' />
        <div className="lg:hidden">
          <button className="flex items-center text-orange-600 p-3" onClick={toggleMenu}>
            <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
          <li><a className="text-xl text-orange-600 font-bold" href="#">Home</a></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li><a className="text-xl text-orange-600 font-bold" href="#about">Overview</a></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li><a className="text-xl text-orange-600 font-bold" href="#experience">Timeline</a></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li><a className="text-xl text-orange-600 font-bold" href="#faq">FAQ</a></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>
          <li><a className="text-xl text-orange-600 font-bold" href="#clients">Sponsers</a></li>
        </ul>
        <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-white text-lg text-orange-600 font-bold rounded-xl transition duration-200" href="#contact">Contact</a>
        {user == null ? 
          <Link
            to="/signin"
            className="hidden lg:inline-block py-2 px-6 bg-orange-600 text-white text-lg font-bold rounded-xl transition duration-200">
            Login
          </Link> : 
          <button
            onClick={() => auth.signOut()}
            className="hidden lg:inline-block py-2 px-6 bg-orange-600 text-white text-lg font-bold rounded-xl transition duration-200">
            Logout
          </button>
        }
      </nav>
      {/* TODO: Customize this */}
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        
        <nav className="fixed z-20 top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-hidden">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img src={logo} alt="" className="h-12"  />
            </a>
            <button onClick={toggleMenu}>
              <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="##about">Overview</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="##experience">Timeline</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#faq">Faq</a>
              </li>
              
              
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
            <a className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-orange-600 text-lg text-white font-bold rounded-xl transition duration-200" href="#contact">Contact</a>
            {user == null ? 
          <Link
            to="/signin"
            className="m-2 lg:inline-block py-2 px-6 bg-orange-600 text-white text-lg font-bold rounded-xl transition duration-200">
            Login
          </Link> : 
          <button
            onClick={() => auth.signOut()}
            className="m-2 lg:inline-block py-2 px-6 bg-orange-600 text-white text-lg font-bold rounded-xl transition duration-200">
            Logout
          </button>
        }
            </div>
           
          </div>
        </nav>
      </div>
  </section>
  );
};

export default Navbar;