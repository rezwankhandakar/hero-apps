// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import demoImg from '../assets/demo-app (1).webp'
// import { useLoaderData, useParams } from 'react-router';
// const Installation = () => {
//     const { id } = useParams();
//   const apps = useLoaderData();

//   const app = apps.find(a => a.id === parseInt(id));
//     return (
//         <div className='bg-[#D2D2D2]'>

//             <div>
//                 <div className='text-center py-5'>
//                     <h2 className='text-2xl font-bold text-black'>Your Installed Apps</h2>
//                     <p className='text-[12px] text-gray-500 '>Explore All Trending Apps on the Market developed by us</p>
//                 </div>

//                 <div className='flex justify-between items-center px-7 py-7'>
//                     <h2 className='text-black font-bold'>1 Apps Found</h2>

//                     <div>
//                         <select defaultValue="Pick a color" className="select appearance-none">
//                             <option disabled={true}>Pick a color</option>
//                             <option>Crimson</option>
//                             <option>Amber</option>
//                             <option>Velvet</option>
//                         </select>
//                     </div>

//                 </div>
//             </div>

//             <div className=' h-auto w-10/12 mx-auto px-6 py-3 '>
//                 <div className='bg-white h-16 w-auto rounded-sm flex justify-between items-center px-7 mb-3'>

                

//                         <div className='flex items-center gap-2'>
//                             <img className='h-12 w-12 rounded-sm' src={app.image} alt="" />

//                             <div>
//                                 <h2 className='text-black text-[12px] font-semibold'>Forest: Focus for Productivity</h2>
//                                 <div className='flex items-center gap-4'>
//                                     <div className='flex items-center'>
//                                         <FontAwesomeIcon icon={faDownload} className="text-[12px] text-[#00D390] " />
//                                         <p className='text-[12px] font-semibold text-[#00D390]'>9M</p>
//                                     </div>
//                                     <div className='flex items-center'>
//                                         <FontAwesomeIcon icon={faStar} className="text-[12px] text-[#FF8811]" />
//                                         <p className='text-[12px] font-semibold text-[#FF8811]'>5</p>
//                                     </div>
//                                     <div className='flex items-center gap-1'>

//                                         <p className='text-[12px] font-semibold text-[#627382]'>258</p>
//                                         <p className='text-[12px] font-semibold text-[#627382]'>MB</p>
//                                     </div>

//                                 </div>
//                             </div>

                            
//                         </div>
//                         <button className='bg-[#00D390] h-7 w-20 rounded-sm'>Uninstall</button>
                    

//                 </div>


//             </div>
//         </div>
//     );
// };

// export default Installation;



import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  return (
    <div className='bg-[#D2D2D2] min-h-screen'>
      <div className='text-center py-5'>
        <h2 className='text-2xl font-bold text-black'>Your Installed Apps</h2>
        <p className='text-[12px] text-gray-500'>
          Explore all apps you’ve installed
        </p>
      </div>

      <div className='flex justify-between items-center px-7 py-7'>
        <h2 className='text-black font-bold'>{installedApps.length} Apps Found</h2>
      </div>

      <div className='w-10/12 mx-auto px-6 py-3'>
        {installedApps.length > 0 ? (
          installedApps.map(app => (
            <div key={app.id} className='bg-white h-16 w-auto rounded-sm flex justify-between items-center px-7 mb-3'>
              <div className='flex items-center gap-2'>
                <img className='h-12 w-12 rounded-sm' src={app.image} alt={app.title} />
                <div>
                  <h2 className='text-black text-[12px] font-semibold'>{app.title}</h2>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                      <FontAwesomeIcon icon={faDownload} className="text-[12px] text-[#00D390]" />
                      <p className='text-[12px] font-semibold text-[#00D390]'>{app.downloads}</p>
                    </div>
                    <div className='flex items-center'>
                      <FontAwesomeIcon icon={faStar} className="text-[12px] text-[#FF8811]" />
                      <p className='text-[12px] font-semibold text-[#FF8811]'>{app.ratingAvg}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='text-[12px] font-semibold text-[#627382]'>{app.size}</p>
                      <p className='text-[12px] font-semibold text-[#627382]'>MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className='bg-[#FF5E5E] text-white h-7 w-20 rounded-sm text-[12px]'
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500 py-10'>No apps installed yet.</p>
        )}
      </div>
    </div>
  );
};

export default Installation;
