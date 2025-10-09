
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from 'react-hot-toast';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));

    toast.success('App uninstalled successfully!', {
      duration: 2500,
      position: 'top-center',
      style: {
        background: '#333',
        color: '#fff',
        fontSize: '14px',
      },
      icon: '🗑️',
    });
  };

  // Helper: Convert "1.2M" or "200K" to Number
  const parseDownloads = (val) => {
    if (typeof val === "number") return val; // already number
    if (!val) return 0;
    val = val.toString().trim().toUpperCase();
    if (val.endsWith("M")) return parseFloat(val) * 1_000_000;
    if (val.endsWith("K")) return parseFloat(val) * 1_000;
    return parseFloat(val) || 0;
  };

  // Sorting 
  const sortedApps = [...installedApps].sort((a, b) => {
    const aDownloads = parseDownloads(a.downloads);
    const bDownloads = parseDownloads(b.downloads);

    switch (sortOption) {
      case "downloadsHighLow":
        return bDownloads - aDownloads;
      case "downloadsLowHigh":
        return aDownloads - bDownloads;
      case "sizeHighLow":
        return b.size - a.size;
      case "sizeLowHigh":
        return a.size - b.size;
      default:
        return 0;
    }
  });

  // Loader section
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#D2D2D2]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-[#632EE3] font-semibold text-lg">
            Loading Installed Apps...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#D2D2D2] min-h-screen">
      <Toaster />

      <div className="text-center py-5">
        <h2 className="text-2xl font-bold text-black">Your Installed Apps</h2>
        <p className="text-[12px] text-gray-500">
          Explore all apps you’ve installed
        </p>
      </div>

      {/* Sort Section */}
      <div className="flex flex-wrap justify-between items-center px-7 py-5 gap-3">
        <h2 className="text-black font-bold">
          {installedApps.length} Apps Found
        </h2>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-400 text-sm rounded-md px-2 py-1 bg-white text-gray-700"
        >
          <option value="">Sort By</option>
          <option value="downloadsHighLow">Downloads (High → Low)</option>
          <option value="downloadsLowHigh">Downloads (Low → High)</option>
          <option value="sizeHighLow">Size (High → Low)</option>
          <option value="sizeLowHigh">Size (Low → High)</option>
        </select>
      </div>

      {/* App List Section */}
      <div className="w-10/12 mx-auto px-6 py-3">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white h-16 w-auto rounded-md flex justify-between items-center px-7 mb-3 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <img
                  className="h-12 w-12 rounded-sm object-cover"
                  src={app.image}
                  alt={app.title}
                />
                <div>
                  <h2 className="text-black text-[13px] font-semibold">
                    {app.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="text-[12px] text-[#00D390]"
                      />
                      <p className="text-[12px] font-semibold text-[#00D390]">
                        {app.downloads}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[12px] text-[#FF8811]"
                      />
                      <p className="text-[12px] font-semibold text-[#FF8811]">
                        {app.ratingAvg}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-[12px] font-semibold text-[#627382]">
                        {app.size}
                      </p>
                      <p className="text-[12px] font-semibold text-[#627382]">
                        MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-[#FF5E5E] hover:bg-[#ff4040] transition-colors text-white h-7 w-20 rounded-sm text-[12px]"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">
            No apps installed yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Installation;
