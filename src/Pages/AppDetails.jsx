
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData, useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import AppNotFound from './AppNotFound';

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundApp = apps.find(a => a.id === parseInt(id));
      setApp(foundApp);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [apps, id]);

  const handleInstall = () => {
    setIsInstalled(true);
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = installedApps.find(a => a.id === app.id);

    if (!alreadyInstalled) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      toast.success(`${app.title} Installed Successfully! 🎉`);
    } else {
      toast.error("Already Installed!");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#D2D2D2]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-[#632EE3] font-semibold text-lg">Loading App Details...</p>
        </div>
      </div>
    );
  }

  if (!app) {
    return <AppNotFound></AppNotFound>;
  }

  return (
    <div className='bg-[#D2D2D2] min-h-screen'>
      <Toaster position="top-center" reverseOrder={false} />

      {/* App Info Section */}
      <div className='p-5 md:p-7 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10'>
        <img className='w-32 h-32 md:w-48 md:h-48 rounded-md shadow-md' src={app.image} alt={app.title} />

        <div className='text-center md:text-left'>
          <h2 className='text-xl md:text-2xl font-bold text-black'>{app.title}</h2>
          <p className='text-[12px] md:text-[14px] text-black pt-2'>
            Developed by{" "}
            <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
              {app.companyName}
            </span>
          </p>

          <div className="border-b-2 border-gray-400 pt-3 md:w-[80%] mx-auto md:mx-0"></div>

          {/* Stats Section */}
          <div className='flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 mt-4'>
            <div className='text-center'>
              <FontAwesomeIcon icon={faDownload} className="text-[20px] text-[#00D390]" />
              <div className='text-[10px] text-black'>Downloads</div>
              <div className='text-xl md:text-2xl font-bold text-black'>{app.downloads}</div>
            </div>

            <div className='text-center'>
              <FontAwesomeIcon icon={faStar} className="text-[20px] text-[#FF8811]" />
              <div className='text-[10px] text-black'>Average Ratings</div>
              <div className='text-xl md:text-2xl font-bold text-black'>{app.ratingAvg}</div>
            </div>

            <div className='text-center'>
              <FontAwesomeIcon icon={faThumbsUp} className="text-[20px] text-violet-600" />
              <div className='text-[10px] text-black'>Total Reviews</div>
              <div className='text-xl md:text-2xl font-bold text-black'>{app.reviews}</div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`h-8 w-36 md:h-9 md:w-40 rounded-md mt-4 text-[12px] md:text-[13px] font-semibold transition-all 
              ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#04b37b]'}`}
          >
            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="border-b-2 border-gray-400 my-6 mx-5 md:mx-8"></div>

      <div className="mx-4 md:mx-8 py-5">
        <h2 className="text-[15px] md:text-[18px] font-bold text-black pb-4 text-center md:text-left">
          User Ratings Overview
        </h2>
        <div className="bg-white p-3 md:p-5 rounded-md shadow-md">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={app.ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#7C3AED" name="Number of Ratings" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description Section */}
      <div className="border-b-2 border-gray-400 my-6 mx-5 md:mx-8"></div>

      <div className='mx-4 md:mx-8 py-5'>
        <h2 className='text-[15px] md:text-[18px] font-bold text-black pb-4 text-center md:text-left'>
          Description
        </h2>
        <p className='text-[12px] md:text-[14px] text-gray-600 leading-relaxed text-justify md:text-left'>
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;

