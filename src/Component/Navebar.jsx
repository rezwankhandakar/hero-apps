import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/logo.png'
import { NavLink } from 'react-router';

const Navebar = () => {
    return (
        <nav className='h-12 w-auto bg-[#E9E9E9] flex justify-between items-center px-8'>

            <NavLink to='/'><div className='flex justify-center items-center '>
                <img className='w-8' src={logo} alt="" />
                <h5 className='text-lg font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h5>
            </div></NavLink>

            <ul className='flex justify-center items-center gap-4 text-black'>
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
            <NavLink to='https://github.com/rezwankhandakar'><div className='flex justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-32   h-8 gap-1 rounded-md'>
                <FontAwesomeIcon
                    icon={faGithub}
                    className=" text-lg text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
                />
                <h2>Contribute</h2>
            </div></NavLink>

        </nav>
    );
};

export default Navebar;