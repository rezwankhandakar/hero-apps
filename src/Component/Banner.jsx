// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAppStoreIos, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
// import bannerImg from '../assets/hero.png'
// import { NavLink } from 'react-router';

// const Banner = () => {
//     return (
//         <div className='bg-[#D2D2D2]'>
//             <div className='flex flex-col justify-around items-center'>

//                 <div className='text-center'>
//                     <h1 className='text-3xl font-bold text-black'>We Build <br />
//                         <span className='text- bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
//                 </div>
//                 <p className='text-[12px] text-gray-500 text-center'> At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
//                 <div className=' flex justify-center items-center gap-4 mt-5 mb-5'>

//                     <NavLink to='https://play.google.com/store/games?hl=en'><div className='flex justify-center items-center border border-gray-400 px-2 py-1'>
//                         <FontAwesomeIcon
//                             icon={faGooglePlay}
//                             className="text-4xl text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
//                         />
//                         <h3 className='text-black font-bold'>Google Play</h3>
//                     </div></NavLink>

//                     <NavLink to='https://www.apple.com/app-store/'><div className='flex justify-center items-center border border-gray-400 px-2 py-1'>
//                         <FontAwesomeIcon
//                             icon={faAppStoreIos}
//                             className="text-4xl text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
//                         />
//                         <h3 className='text-black font-bold'>App Store</h3>
//                     </div></NavLink>

//                 </div>
//                 <img className='w-1/2' src={bannerImg} alt="" />

//             </div>
//             <div className='h-48 w-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-around items-center'>
//                 <div>
//                     <h2 className='text-2xl font-bold'>Trusted by Millions, Built for You</h2>

//                     <div className='flex justify-center items-center gap-10 pt-5'>
//                         <div className='text-center'>
//                             <p className='text-[10px] text-white'>Total Downloads</p>
//                             <h2 className='text-2xl font-bold'>29.6M</h2>
//                             <p className='text-[10px] text-white'>21% more than last month</p>
//                         </div>

//                         <div className='text-center'>
//                             <p className='text-[10px] text-white'>Total Reviews</p>
//                             <h2 className='text-2xl font-bold'>906K</h2>
//                             <p className='text-[10px] text-white'>46% more than last month</p>
//                         </div>

//                         <div className='text-center'>
//                             <p className='text-[10px] text-white'>Active Apps</p>
//                             <h2 className='text-2xl font-bold'>132+</h2>
//                             <p className='text-[10px] text-white'>31 more will Launch</p>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Banner;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import bannerImg from '../assets/hero.png'
import { NavLink } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-[#D2D2D2]'>

            {/* 🔹 Top Section */}
            <div className='flex flex-col justify-around items-center px-4 md:px-0 text-center'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold text-black leading-snug'>
                        We Build <br />
                        <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
                            Productive
                        </span> Apps
                    </h1>
                </div>

                <p className='text-[12px] text-gray-500 mt-3 md:mt-2'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden md:block' />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                {/* 🔸 Buttons Section */}
                <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 mt-5 mb-5 w-full md:w-auto'>
                    <NavLink to='https://play.google.com/store/games?hl=en'>
                        <div className='flex justify-center items-center border border-gray-400 px-4 py-2 rounded-md bg-white hover:bg-gray-100 transition'>
                            <FontAwesomeIcon
                                icon={faGooglePlay}
                                className="text-3xl md:text-4xl text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
                            />
                            <h3 className='text-black font-bold ml-2 text-sm md:text-base'>Google Play</h3>
                        </div>
                    </NavLink>

                    <NavLink to='https://www.apple.com/app-store/'>
                        <div className='flex justify-center items-center border border-gray-400 px-4 py-2 rounded-md bg-white hover:bg-gray-100 transition'>
                            <FontAwesomeIcon
                                icon={faAppStoreIos}
                                className="text-3xl md:text-4xl text-gray-800 hover:text-[#632EE3] transition-colors duration-300 cursor-pointer"
                            />
                            <h3 className='text-black font-bold ml-2 text-sm md:text-base'>App Store</h3>
                        </div>
                    </NavLink>
                </div>

                {/* 🔹 Image Section */}
                <img
                    className='w-3/4 md:w-1/2 max-w-sm md:max-w-none mb-5 md:mb-0'
                    src={bannerImg}
                    alt="Banner"
                />
            </div>

            {/* 🔸 Bottom Gradient Stats */}
            <div className='w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center text-center py-8 md:py-0 md:h-48'>
                <h2 className='text-xl md:text-2xl font-bold text-white mb-5 md:mb-0'>
                    Trusted by Millions, Built for You
                </h2>

                <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 text-white'>
                    <div className='text-center'>
                        <p className='text-[10px]'>Total Downloads</p>
                        <h2 className='text-xl md:text-2xl font-bold'>29.6M</h2>
                        <p className='text-[10px]'>21% more than last month</p>
                    </div>

                    <div className='text-center'>
                        <p className='text-[10px]'>Total Reviews</p>
                        <h2 className='text-xl md:text-2xl font-bold'>906K</h2>
                        <p className='text-[10px]'>46% more than last month</p>
                    </div>

                    <div className='text-center'>
                        <p className='text-[10px]'>Active Apps</p>
                        <h2 className='text-xl md:text-2xl font-bold'>132+</h2>
                        <p className='text-[10px]'>31 more will Launch</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
