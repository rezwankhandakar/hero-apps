import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import demoImg from '../assets/demo-app (1).webp'
const Installation = () => {
    return (
        <div className='bg-[#D2D2D2]'>

            <div>
                <div className='text-center py-5'>
                    <h2 className='text-2xl font-bold text-black'>Your Installed Apps</h2>
                    <p className='text-[12px] text-gray-500 '>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='flex justify-between items-center px-7 py-7'>
                    <h2 className='text-black font-bold'>1 Apps Found</h2>

                    <div>
                        <select defaultValue="Pick a color" className="select appearance-none">
                            <option disabled={true}>Pick a color</option>
                            <option>Crimson</option>
                            <option>Amber</option>
                            <option>Velvet</option>
                        </select>
                    </div>

                </div>
            </div>

            <div className=' h-auto w-10/12 mx-auto px-6 py-3 '>
                <div className='bg-white h-16 w-auto rounded-sm flex justify-between items-center px-7 mb-3'>

                

                        <div className='flex items-center gap-2'>
                            <img className='h-12 w-12 rounded-sm' src={demoImg} alt="" />

                            <div>
                                <h2 className='text-black text-[12px] font-semibold'>Forest: Focus for Productivity</h2>
                                <div className='flex items-center gap-4'>
                                    <div className='flex items-center'>
                                        <FontAwesomeIcon icon={faDownload} className="text-[12px] text-[#00D390] " />
                                        <p className='text-[12px] font-semibold text-[#00D390]'>9M</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <FontAwesomeIcon icon={faStar} className="text-[12px] text-[#FF8811]" />
                                        <p className='text-[12px] font-semibold text-[#FF8811]'>5</p>
                                    </div>
                                    <div className='flex items-center gap-1'>

                                        <p className='text-[12px] font-semibold text-[#627382]'>258</p>
                                        <p className='text-[12px] font-semibold text-[#627382]'>MB</p>
                                    </div>

                                </div>
                            </div>

                            
                        </div>
                        <button className='bg-[#00D390] h-7 w-20 rounded-sm'>Uninstall</button>
                    

                </div>


            </div>
        </div>
    );
};

export default Installation;