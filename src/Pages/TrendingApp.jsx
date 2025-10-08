import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import demoImg from '../assets/demo-app (1).webp'
const TrendingApp = () => {
    return (
        <div className='bg-[#D2D2D2] text-center'>
            <div className='text-center pt-5'>
                <h1 className='text-2xl font-bold text-black '>Trending Apps</h1>
                <p className='text-[10px] text-black'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className=' h-auto w-10/12 mx-auto px-6 py-3'>

                <div class="grid grid-cols-4 gap-4">

                    <div className='bg-white h-64 rounded-md '>
                        <img className='w-48 h-48 mx-auto pt-4 pb-1' src={demoImg} alt="" />
                        <h2 className='text-black text-[14px] font-semibold text-center'>Forest: Focus for Productivity</h2>

                        <div className='flex justify-between items-center px-2 pb-3 pt-2'>
                            <div className='bg-[#f1f5e8] h-7 w-16 rounded-sm flex justify-between items-center px-1'>
                                <FontAwesomeIcon icon={faDownload} className="text-[14px] text-[#00D390] " />
                                <p className='text-[14px] font-bold text-[#00D390]'>9M</p>
                            </div>

                            <div className='bg-[#FFF0E1] h-7 w-16 rounded-sm flex justify-between items-center px-1'>
                                <FontAwesomeIcon icon={faStar} className="text-[14px] text-[#FF8811]" />
                                <p className='text-[14px] font-bold text-[#FF8811]'>9M</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button className='h-6 w-24 rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[14px] my-5'>Show All</button>
        </div>
    );
};

export default TrendingApp;