import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import demoImg from '../assets/demo-app (1).webp'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    return (
        <div className='bg-[#D2D2D2]'>

            <div className='p-7 flex items-center gap-4'>
                <img className='w-48 h-48 ' src={demoImg} alt="" />

                <div>
                    <div className=''>
                        <h2 className='text-2xl font-bold text-black'>SmPlan:ToDo List with Reminder</h2>
                        <p className='text-[12px] text-black pt-2'>Developed by <span>productive.io</span></p>
                        <div className="border-b-2 border-gray-400 pt-3"></div>
                    </div>

                    <div className='flex items-center gap-10 mt-4'>
                        <div>
                            <div><FontAwesomeIcon icon={faDownload} className="text-[20px] text-[#00D390] " /> </div>
                            <div className='text-[10px] text-black'>Downloads</div>
                            <div className='text-2xl font-bold text-black'>8M</div>
                        </div>
                        <div>
                            <div><FontAwesomeIcon icon={faStar} className="text-[20px] text-[#FF8811]" /> </div>
                            <div className='text-[10px] text-black'>Average Ratings</div>
                            <div className='text-2xl font-bold text-black'>4.9</div>
                        </div>
                        <div>
                            <div><FontAwesomeIcon icon={faThumbsUp} className="text-[20px] text-violet-600" /> </div>
                            <div className='text-[10px] text-black'>Total Reviews</div>
                            <div className='text-2xl font-bold text-black'>54K</div>
                        </div>
                    </div>

                    <button className='bg-[#00D390] h-7 w-32 rounded-sm mt-4 text-[12px]'>Install Now (291 MB)</button>
                </div>
            </div>

            <div className="border-b-2 border-gray-400 p-7 mx-8"></div>

            {/* <div>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div> */}
            <div className="border-b-2 border-gray-400 p-7 mx-8"></div>

            <div className='mx-8 py-5'>
                <h2 className='text-[15px] font-bold text-black pb-4'>Description</h2>
                <p className='text-[12px] text-gray-500'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
</p>
            </div>

        </div>
    );
};

export default AppDetails;