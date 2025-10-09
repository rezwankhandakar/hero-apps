import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from 'react-router';

const OurAllApplication = () => {
    const allApps = useLoaderData();

    const [searchTerm, setSearchTerm] = useState("");
    const filteredApps = allApps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className='bg-[#D2D2D2]'>
            <div>
                <div className='text-center py-5'>
                    <h2 className='text-2xl font-bold text-black'>Our All Applications</h2>
                    <p className='text-[12px] text-gray-500 '>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='flex justify-between items-center px-7 py-7'>
                    <h2 className='text-black font-bold'>({allApps.length}) Apps Found</h2>

                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search..."
                                className="outline-none bg-transparent" />
                        </label>
                    </div>

                </div>
            </div>

            <div className=' h-auto w-10/12 mx-auto px-6 py-3'>

                <div class="grid grid-cols-4 gap-4">


                    {
                        filteredApps.length > 0 ? (
                            filteredApps.map(allApp => (
                                <Link key={allApp.id} to={`/appDetails/${allApp.id}`}>
                                    <div className='bg-white h-64 rounded-md'>
                                        <img className='w-48 h-48 mx-auto pt-4 pb-1' src={allApp.image} alt={allApp.title} />
                                        <h2 className='text-black text-[14px] font-semibold text-center'>{allApp.companyName}</h2>

                                        <div className='flex justify-between items-center px-2 pb-3 pt-2'>
                                            <div className='bg-[#f1f5e8] h-7 w-16 rounded-sm flex justify-between items-center px-1'>
                                                <FontAwesomeIcon icon={faDownload} className="text-[14px] text-[#00D390]" />
                                                <p className='text-[14px] font-bold text-[#00D390]'>{allApp.downloads}</p>
                                            </div>

                                            <div className='bg-[#FFF0E1] h-7 w-16 rounded-sm flex justify-between items-center px-1'>
                                                <FontAwesomeIcon icon={faStar} className="text-[14px] text-[#FF8811]" />
                                                <p className='text-[14px] font-bold text-[#FF8811]'>{allApp.ratingAvg}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-4 text-center py-20">
                                <h2 className="text-2xl font-bold text-gray-600">❌ App Not Found</h2>
                                <p className="text-sm text-gray-500 mt-2">Try searching with a different keyword</p>
                            </div>
                        )
                    }


                </div>
            </div>

        </div>
    );
};

export default OurAllApplication;