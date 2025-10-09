
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData, useParams, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const apps = useLoaderData();
  const app = apps.find(a => a.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(false);

  const handleInstall = () => {
    setIsInstalled(true);

    // 🧠 LocalStorage এ অ্যাপ যোগ করা
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

  if (!app) {
    return <p className='text-center text-black py-10'>App Not Found</p>;
  }

  return (
    <div className='bg-[#D2D2D2] min-h-screen'>
      <Toaster position="top-center" reverseOrder={false} />

      <div className='p-7 flex items-center gap-4'>
        <img className='w-48 h-48' src={app.image} alt={app.title} />

        <div>
          <h2 className='text-2xl font-bold text-black'>{app.title}</h2>
          <p className='text-[12px] text-black pt-2'>
            Developed by{" "}
            <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>
              {app.companyName}
            </span>
          </p>

          <div className="border-b-2 border-gray-400 pt-3"></div>

          <div className='flex items-center gap-10 mt-4'>
            <div>
              <FontAwesomeIcon icon={faDownload} className="text-[20px] text-[#00D390]" />
              <div className='text-[10px] text-black'>Downloads</div>
              <div className='text-2xl font-bold text-black'>{app.downloads}</div>
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-[20px] text-[#FF8811]" />
              <div className='text-[10px] text-black'>Average Ratings</div>
              <div className='text-2xl font-bold text-black'>{app.ratingAvg}</div>
            </div>
            <div>
              <FontAwesomeIcon icon={faThumbsUp} className="text-[20px] text-violet-600" />
              <div className='text-[10px] text-black'>Total Reviews</div>
              <div className='text-2xl font-bold text-black'>{app.reviews}</div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`h-7 w-32 rounded-sm mt-4 text-[12px] transition-all 
              ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390]'}`}
          >
            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* ✅ Bar Chart Section */}
      <div className="border-b-2 border-gray-400 p-7 mx-8"></div>

      <div className="mx-8 py-5">
        <h2 className="text-[15px] font-bold text-black pb-4">User Ratings Overview</h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={app.ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Number of Ratings" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="border-b-2 border-gray-400 p-7 mx-8"></div>

      {/* ✅ Description Section */}
      <div className='mx-8 py-5'>
        <h2 className='text-[15px] font-bold text-black pb-4'>Description</h2>
        <p className='text-[12px] text-gray-500'>{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
