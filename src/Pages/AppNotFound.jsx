import React from 'react';
import AppErrorImg from '../assets/App-Error.png'

const AppNotFound = () => {
    return (
        <div className='bg-[#D2D2D2]'>
            <div className='flex flex-col justify-center items-center gap-2 pt-8'>
                <img className='w-64' src={AppErrorImg} alt="" />
                <h2 className='text-2xl font-bold text-black'>OPPS!! APP NOT FOUND</h2>
                <p className='text-[12px] text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-7 w-20 rounded-sm mb-4 text-[13px]'>Go Back!</button>
            </div>
            
        </div>
    );
};

export default AppNotFound;