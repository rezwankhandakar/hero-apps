import React from 'react';
import Navebar from '../../Component/Navebar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer';

const Root = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;