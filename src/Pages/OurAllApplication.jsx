
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from 'react-router';
import AppNotFound from './AppNotFound';

const OurAllApplication = () => {
  const allApps = useLoaderData();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(allApps);
  const [loading, setLoading] = useState(true);

  //  page load loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Loader for search typing
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = allApps.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 700); 

    return () => clearTimeout(timer);
  }, [searchTerm, allApps]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#D2D2D2]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-[#632EE3] font-semibold text-lg">
            {searchTerm ? "Searching Apps..." : "Loading Apps..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-[#D2D2D2]'>
      <div className='text-center py-5'>
        <h2 className='text-2xl font-bold text-black'>Our All Applications</h2>
        <p className='text-[12px] text-gray-500'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center px-7 py-7 gap-4'>
        <h2 className='text-black font-bold'>({filteredApps.length}) Apps Found</h2>

        <div>
          <label className="input flex items-center gap-2 bg-white rounded-md px-2 py-1 border border-gray-300">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
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
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="outline-none bg-transparent text-black"
            />
          </label>
        </div>
      </div>

      <div className='h-auto w-10/12 mx-auto px-6 py-3'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredApps.length > 0 ? (
            filteredApps.map(allApp => (
              <Link key={allApp.id} to={`/appDetails/${allApp.id}`}>
                <div className='bg-white h-64 rounded-md hover:shadow-md transition-shadow duration-300'>
                  <img
                    className='w-48 h-48 mx-auto pt-4 pb-1 object-contain'
                    src={allApp.image}
                    alt={allApp.title}
                  />
                  <h2 className='text-black text-[14px] font-semibold text-center'>
                    {allApp.companyName}
                  </h2>

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
              <AppNotFound />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurAllApplication;
