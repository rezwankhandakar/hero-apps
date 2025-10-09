// import React from 'react';
// import Banner from '../Component/Banner';
// import TrendingApp from './TrendingApp';

// const Home = () => {
//     return (
//         <div>
//             <Banner></Banner>
//             <TrendingApp></TrendingApp>
//         </div>
//     );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import Banner from '../Component/Banner';
import TrendingApp from './TrendingApp';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#E9E9E9]">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-[#632EE3] font-semibold text-lg">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Banner />
            <TrendingApp />
        </div>
    );
};

export default Home;
