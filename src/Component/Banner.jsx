import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import bannerImg from '../assets/hero.png'
import { NavLink } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-[#D2D2D2]'>
            <div className='flex flex-col justify-around items-center'>

                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-black'>We Build <br />
                        <span className='text- bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                </div>
                <p className='text-[12px] text-gray-500 text-center'> At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className=' flex justify-center items-center gap-4 mt-5 mb-5'>

                    <NavLink to='https://play.google.com/store/games?hl=en'><div className='flex justify-center items-center border border-gray-400 px-2 py-1'>
                        <FontAwesomeIcon
                            icon={faGooglePlay}
                            className="text-4xl text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
                        />
                        <h3 className='text-black font-bold'>Google Play</h3>
                    </div></NavLink>

                    <NavLink to='https://www.apple.com/app-store/'><div className='flex justify-center items-center border border-gray-400 px-2 py-1'>
                        <FontAwesomeIcon
                            icon={faAppStoreIos}
                            className="text-4xl text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
                        />
                        <h3 className='text-black font-bold'>App Store</h3>
                    </div></NavLink>

                </div>
                <img className='w-1/2' src={bannerImg} alt="" />

            </div>
            <div className='h-48 w-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-around items-center'>
                <div>
                    <h2 className='text-2xl font-bold'>Trusted by Millions, Built for You</h2>

                    <div className='flex justify-center items-center gap-10 pt-5'>
                        <div className='text-center'>
                            <p className='text-[10px] text-white'>Total Downloads</p>
                            <h2 className='text-2xl font-bold'>29.6M</h2>
                            <p className='text-[10px] text-white'>21% more than last month</p>
                        </div>

                        <div className='text-center'>
                            <p className='text-[10px] text-white'>Total Reviews</p>
                            <h2 className='text-2xl font-bold'>906K</h2>
                            <p className='text-[10px] text-white'>46% more than last month</p>
                        </div>

                        <div className='text-center'>
                            <p className='text-[10px] text-white'>Active Apps</p>
                            <h2 className='text-2xl font-bold'>132+</h2>
                            <p className='text-[10px] text-white'>31 more will Launch</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;