
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"; 
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';

const Navebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='bg-[#E9E9E9] px-4 sm:px-8 py-2 flex justify-between items-center'>
            {/* Logo */}
            <NavLink to='/' className='flex items-center gap-2'>
                <img className='w-8' src={logo} alt="Logo" />
                <h5 className='text-lg font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h5>
            </NavLink>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-4 text-black'>
                <li>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "border-b-2 border-[#632EE3]" : "hover:border-b-2 hover:border-gray-400"
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/allApplication' className={({ isActive }) =>
                        isActive ? "border-b-2 border-[#632EE3]" : "hover:border-b-2 hover:border-gray-400"
                    }>Apps</NavLink>
                </li>
                <li>
                    <NavLink to='/installation' className={({ isActive }) =>
                        isActive ? "border-b-2 border-[#632EE3]" : "hover:border-b-2 hover:border-gray-400"
                    }>Installation</NavLink>
                </li>
            </ul>

            {/* GitHub Contribute Button (Desktop) */}
            <div className='hidden md:flex'>
                <a href='https://github.com/rezwankhandakar' target="_blank" rel="noopener noreferrer">
                    <div className='flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-32 h-8 gap-1 rounded-md'>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className=" text-lg text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
                        />
                        <h2>Contribute</h2>
                    </div>
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faX : faBars} className="text-2xl" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden shadow-md z-50'>
                    <NavLink to='/' onClick={toggleMenu} className={({ isActive }) =>
                        isActive ? "border-b-2 border-[#632EE3]" : "hover:border-b-2 hover:border-gray-400"
                    }>Home</NavLink>
                    <NavLink to='/allApplication' onClick={toggleMenu} className={({ isActive }) =>
                        isActive ? "border-b-2 border-[#632EE3]" : "hover:border-b-2 hover:border-gray-400"
                    }>Apps</NavLink>
                    <NavLink to='/installation' onClick={toggleMenu} className={({ isActive }) =>
                        isActive ? "border-b-2 border-[#632EE3]" : "hover:border-b-2 hover:border-gray-400"
                    }>Installation</NavLink>
                    <a href='https://github.com/rezwankhandakar' target="_blank" rel="noopener noreferrer">
                        <div className='flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-32 h-8 gap-1 rounded-md mt-2'>
                            <FontAwesomeIcon
                                icon={faGithub}
                                className=" text-lg text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
                            />
                            <h2>Contribute</h2>
                        </div>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navebar;

