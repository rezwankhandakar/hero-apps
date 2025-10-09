import React from 'react';
import ErrorPagImg from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-[#D2D2D2]'>
                    <div className='flex flex-col justify-center items-center gap-2 pt-8'>
                        <img className='w-64' src={ErrorPagImg} alt="" />
                        <h2 className='text-2xl font-bold text-black'>Oops, page not found!</h2>
                        <p className='text-[12px] text-gray-500'>The page you are looking for is not available.</p>
                        <Link to='/'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-7 w-20 rounded-sm mb-4 text-[13px]'>Go Back!</button></Link>
                    </div>
                    
                </div>
    );
};

export default ErrorPage;